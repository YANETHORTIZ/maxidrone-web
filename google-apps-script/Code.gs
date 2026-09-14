const SPREADSHEET_ID = "1mwLJnLqp2ju6uiMNLI2TbYKFo6tgQirkfW8Rls5rpzM";
const SHEET_NAME = "Hoja 1";

const HEADERS = [
  "Fecha",
  "Nombre",
  "Empresa",
  "Correo",
  "Teléfono",
  "Solución DJI",
  "Proyecto",
  "Estado",
];

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const payload = parsePayload_(event);

    // Campo invisible del formulario. Los bots suelen completarlo.
    if (payload.website) {
      return jsonResponse_({ ok: true });
    }

    const nombre = cleanCell_(payload.nombre, 200);
    const correo = cleanCell_(payload.email || payload.correo, 320);
    const telefono = cleanCell_(payload.telefono, 80);
    const proyecto = cleanCell_(payload.proyecto || payload.mensaje, 5000);

    if (!nombre || !correo || !telefono || !proyecto) {
      throw new Error("Faltan datos obligatorios.");
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`No se encontró la hoja ${SHEET_NAME}.`);
    }

    ensureHeaders_(sheet);

    const nextRow = sheet.getLastRow() + 1;
    const row = [[
      new Date(),
      nombre,
      cleanCell_(payload.empresa, 250),
      correo,
      telefono,
      cleanCell_(payload.solucion, 300),
      proyecto,
      "Nuevo",
    ]];

    sheet.getRange(nextRow, 1, 1, HEADERS.length).setValues(row);
    sheet.getRange(nextRow, 1).setNumberFormat("dd/mm/yyyy hh:mm:ss");
    sheet.getRange(nextRow, 5).setNumberFormat("@");

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({
      ok: false,
      error: error instanceof Error ? error.message : "No se pudo guardar la solicitud.",
    });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error("La solicitud no contiene datos.");
  }

  return JSON.parse(event.postData.contents);
}

function cleanCell_(value, maxLength) {
  const cleaned = String(value || "").trim().slice(0, maxLength);

  // Evita que una respuesta se interprete como fórmula en Google Sheets o Excel.
  return /^[=+\-@]/.test(cleaned) ? `'${cleaned}` : cleaned;
}

function ensureHeaders_(sheet) {
  const currentHeaders = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getDisplayValues()[0];

  if (currentHeaders.every((header) => !header)) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    return;
  }

  if (currentHeaders.join("|") !== HEADERS.join("|")) {
    throw new Error("Las columnas de la hoja fueron modificadas.");
  }
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
