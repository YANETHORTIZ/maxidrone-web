import Link from "next/link";
import Image from "next/image";

/* ============================================================
   VERTICALES
============================================================ */

const verticals = [
  {
    number: "01",
    title: "Agricultura de precisión",
    subtitle: "Sector agroalimentario",
    description:
      "Tenemos un compromiso histórico con el campo mexicano. Integramos tecnología aérea que permite optimizar aplicaciones, mejorar la eficiencia operativa y transformar la manera en que se gestiona la producción agrícola.",
  },
  {
    number: "02",
    title: "Construcción e infraestructura",
    subtitle: "Digitalización del entorno",
    description:
      "Transformamos la gestión de obra mediante captura aérea, levantamientos, fotogrametría, inspección y generación de información para una toma de decisiones más rápida y precisa.",
  },
  {
    number: "03",
    title: "Energía y petroquímica",
    subtitle: "Operaciones críticas",
    description:
      "Impulsamos la seguridad y continuidad operativa mediante soluciones para inspección y monitoreo en refinerías, subestaciones, líneas de transmisión, instalaciones industriales y entornos de alto riesgo.",
  },
  {
    number: "04",
    title: "Seguridad y protección civil",
    subtitle: "Respuesta e inteligencia aérea",
    description:
      "Tecnología aérea para seguridad pública, seguridad privada y protección civil, facilitando monitoreo, reconocimiento y toma de decisiones críticas en tiempo real.",
  },
  {
    number: "05",
    title: "Energías renovables",
    subtitle: "Inspección y mantenimiento",
    description:
      "Revolucionamos la inspección de parques solares y eólicos mediante soluciones que permiten obtener información visual y térmica de manera eficiente, segura y repetible.",
  },
];

/* ============================================================
   VALORES
============================================================ */

const values = [
  {
    number: "01",
    title: "Seguridad operativa",
    description:
      "La seguridad es el punto de partida de cada operación y cada solución que implementamos.",
  },
  {
    number: "02",
    title: "Sostenibilidad",
    description:
      "Promovemos tecnologías que optimizan recursos y contribuyen al cuidado del medio ambiente.",
  },
  {
    number: "03",
    title: "Innovación con propósito",
    description:
      "Incorporamos tecnología cuando genera un impacto real, medible y útil para nuestros clientes.",
  },
  {
    number: "04",
    title: "Ética y transparencia",
    description:
      "Construimos relaciones comerciales basadas en responsabilidad, claridad y confianza.",
  },
  {
    number: "05",
    title: "Eficiencia",
    description:
      "Buscamos optimizar procesos, reducir riesgos y aprovechar mejor los recursos de cada operación.",
  },
];

/* ============================================================
   DIFERENCIADORES
============================================================ */

const differentiators = [
  "Soluciones DJI Enterprise y DJI Agriculture",
  "Consultoría especializada",
  "Capacitación profesional",
  "Acompañamiento técnico",
  "Enfoque en seguridad operativa",
  "Soluciones adaptadas a cada industria",
];

const clients = [
  {
    name: "CEMEX",
    logo: "/images/cemex.png",
    logoClassName: "h-20 max-w-[310px]",
  },
  {
    name: "Daikin",
    logo: "/images/Daikin-Logo.png",
    logoClassName: "h-24 max-w-[320px] scale-[1.9]",
  },
  {
    name: "Praderas Huastecas",
    logo: "/images/praderashuastecas.png",
    logoClassName: "h-24 max-w-[260px] scale-110",
  },
];

const clientPhotos = [
  {
    src: "/images/cliente1.jpg",
    alt: "Cliente de MAXIDRONE con equipo DJI Agriculture",
  },
  {
    src: "/images/cliente2.jpg",
    alt: "Entrega de equipo DJI Agriculture a clientes de MAXIDRONE",
  },
  {
    src: "/images/cliente3.jpg",
    alt: "Clientes satisfechos durante la entrega de un dron agrícola",
  },
  {
    src: "/images/cliente4.jpg",
    alt: "Entrega de productos a un cliente de MAXIDRONE",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function NosotrosPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="
          unified-hero
          relative
          isolate
          min-h-[calc(100svh-64px)]
          overflow-hidden
          border-b
          border-white/10
        "
      >

        {/* IMAGEN */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage:
              "url('/images/nosotros.webp')",
          }}
        />


{/* SOMBRA MUY LIGERA */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-r
    from-black/80
    via-black/10
    to-transparent
  "
/>

<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/70
    via-transparent
    to-transparent
  "
/>

        {/* CONTENIDO */}
        <div
          className="
            unified-hero-shell
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-64px)]
            max-w-[1500px]
            items-end
            px-6
            pb-20
            pt-32
            sm:px-10
            lg:px-14
            lg:pb-28
          "
        >

          <div className="unified-hero-copy max-w-[850px]">

            <div className="mb-6 flex items-center gap-4">

              <span className="h-[2px] w-10 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-white/60
                "
              >
                MAXIDRONE
              </p>

            </div>


            <h1
              className="
                subpage-title
                max-w-[850px]
                text-[34px]
                font-semibold
                uppercase
                leading-[0.94]
                tracking-[-0.045em]
                text-white
                min-[360px]:text-[44px]
                sm:text-[58px]
                lg:text-[76px]
              "
            >
              Tecnología para

              <span className="block text-white/55">
                transformar
              </span>

              <span className="block">
                el campo y la industria.
              </span>
            </h1>


            <p
              className="
                mt-8
                max-w-[700px]
                text-lg
                leading-8
                text-white/65
                sm:text-xl
              "
            >
              Somos una empresa mexicana especializada en
              soluciones aéreas profesionales para agricultura,
              industria y/o seguridad.
            </p>


            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-8
                gap-y-3
                border-t
                border-white/15
                pt-6
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/45
              "
            >
              <span>DJI Enterprise</span>
              <span>DJI Agriculture</span>
              <span>Servicios profesionales</span>
              <span>Capacitación</span>
            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          QUIÉNES SOMOS
      ====================================================== */}

      <section
        className="
          border-b
          border-[#181818]
          bg-black
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            gap-12
            px-6
            py-24
            sm:px-10
            lg:grid-cols-[0.7fr_1.3fr]
            lg:px-14
            lg:py-32
          "
        >

          {/* TITULO */}
          <div>

            <div className="flex items-center gap-4">

              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Nuestra identidad
              </p>

            </div>


            <h2
              className="
                mt-6
                text-4xl
                font-semibold
                uppercase
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              ¿Quiénes
              <span className="block text-white/40">
                somos?
              </span>
            </h2>

          </div>


          {/* TEXTO */}
          <div className="max-w-[800px]">

            <p
              className="
                text-base
                font-medium
                leading-[1.45]
                text-white
                sm:text-lg
              "
            >
              En MAXIDRONE ofrecemos soluciones aéreas profesionales de alto nivel para los sectores agrícola, empresarial e industrial, integrando tecnología especializada para optimizar operaciones, mejorar la eficiencia y fortalecer la toma de decisiones.

            </p>


            <div
              className="
                mt-10
                grid
                gap-8
                border-t
                border-white/10
                pt-10
                md:grid-cols-2
              "
            >

              <p
                className="
                  text-base
                  leading-8
                  text-white/55
                "
              >
                En MAXIDRONE distribuimos e integramos
                soluciones de DJI Enterprise y DJI Agriculture
                con un objetivo claro: acelerar la evolución
                operativa de los sectores estratégicos de México.
              </p>


              <p
                className="
                  text-base
                  leading-8
                  text-white/55
                "
              >
                Nuestra participación no termina con la entrega
                de un equipo. Acompañamos a nuestros clientes
                en la selección de tecnología, implementación,
                capacitación y desarrollo de soluciones adaptadas
                a cada operación.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          CLIENTES SATISFECHOS
      ====================================================== */}

      <section className="border-b border-[#181818] bg-[#050505]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-8 bg-[#018C55]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Experiencias reales
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Clientes
                <span className="block text-white/40">satisfechos.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/50">
              Conoce algunos de los proyectos y experiencias que hemos
              compartido con nuestros clientes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {clientPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#0b0b0b]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <span className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] text-white/60">
                  0{index + 1}
                </span>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* ======================================================
          VERTICALES
      ====================================================== */}
<section
  className="
    border-b
    border-[#181818]
    bg-[#080808]
  "
>
  <div
    className="
      mx-auto
      max-w-[1440px]
      px-6
      py-10
      sm:px-10
      lg:px-14
      lg:py-12
    "
  >

    {/* ENCABEZADO */}
    <div
      className="
        grid
        gap-5
        lg:grid-cols-[1fr_0.8fr]
        lg:items-end
      "
    >

      <div>

        <div className="flex items-center gap-4">

          <span className="h-[2px] w-8 bg-[#018C55]" />

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/45
            "
          >
            Sectores estratégicos
          </p>

        </div>

        <h2
          className="
            mt-4
            text-3xl
            font-semibold
            uppercase
            tracking-[-0.04em]
            sm:text-4xl
            lg:text-5xl
          "
        >
          Verticales de
          <span className="block text-white/40">
            alto impacto.
          </span>
        </h2>

      </div>

      <p
        className="
          max-w-xl
          text-base
          leading-7
          text-white/50
        "
      >
        Aplicamos tecnología aérea donde puede generar
        mayor eficiencia, información y seguridad para
        nuestros clientes.
      </p>

    </div>

    {/* VERTICALES */}
    <div className="mt-9 border-t border-white/10">

      {verticals.map((vertical) => (

        <article
          key={vertical.number}
          className="
            group
            grid
            gap-4
            border-b
            border-white/10
            py-5
            transition-all
            duration-300
            md:grid-cols-[70px_0.8fr_1.2fr]
            md:items-start
            lg:py-6
          "
        >

          {/* NUMERO */}
          <span
            className="
              text-xs
              font-semibold
              tracking-[0.15em]
              text-[#018C55]
            "
          >
            {vertical.number}
          </span>

          {/* TITULO */}
          <div>

            <h3
              className="
                text-xl
                font-semibold
                text-white
                transition
                group-hover:text-white
              "
            >
              {vertical.title}
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                uppercase
                tracking-[0.16em]
                text-white/35
              "
            >
              {vertical.subtitle}
            </p>

          </div>

          {/* DESCRIPCIÓN */}
          <p
            className="
              max-w-2xl
              text-sm
              leading-6
              text-white/50
            "
          >
            {vertical.description}
          </p>

        </article>

      ))}

    </div>

  </div>
</section>

      {/* ======================================================
          MISIÓN / VISIÓN
      ====================================================== */}
<section
  className="
    relative
    overflow-hidden
    border-b
    border-white/10
    bg-black
  "
>

  {/* IMAGEN DE FONDO */}
  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-center
      bg-no-repeat
      opacity-40
    "
    style={{
      backgroundImage:
        "url('/images/dronfondo.png')",
    }}
  />


  {/* CAPA OSCURA */}
  <div
    className="
      absolute
      inset-0
      bg-black/70
    "
  />


  {/* SOMBRA LATERAL PARA MEJOR LECTURA */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/80
      via-black/50
      to-black/80
    "
  />


  {/* CONTENIDO */}
  <div
    className="
      relative
      z-10
      mx-auto
      max-w-[1440px]
      px-6
      py-24
      sm:px-10
      lg:px-14
      lg:py-32
    "
  >

    {/* ENCABEZADO */}
    <div className="mb-16">

      <div className="flex items-center gap-4">

        <span className="h-[2px] w-8 bg-[#018C55]" />

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/50
          "
        >
          Nuestro propósito
        </p>

      </div>


      <h2
        className="
          mt-5
          max-w-3xl
          text-4xl
          font-semibold
          uppercase
          tracking-[-0.04em]
          text-white
          sm:text-5xl
        "
      >
        Una visión clara para

        <span className="block text-white/40">
          transformar operaciones.
        </span>

      </h2>

    </div>


    {/* MISIÓN Y VISIÓN */}
    <div
      className="
        grid
        gap-0
        border
        border-white/15
        bg-black/35
        backdrop-blur-[2px]
        lg:grid-cols-2
      "
    >

      {/* ======================================================
          MISIÓN - IZQUIERDA
      ====================================================== */}

      <article
        className="
          relative
          p-8
          sm:p-10
          lg:min-h-[460px]
          lg:p-12
        "
      >

        {/* NÚMERO */}
        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            font-semibold
            tracking-[0.20em]
            text-white/20
          "
        >
          01
        </span>


        {/* ETIQUETA */}
        <div className="flex items-center gap-3">

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#018C55]
            "
          />

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#018C55]
            "
          >
            Misión
          </p>

        </div>


        {/* TITULO */}
        <h3
          className="
            mt-10
            max-w-xl
            text-3xl
            font-semibold
            leading-[1.1]
            tracking-[-0.035em]
            text-white
            sm:text-4xl
          "
        >
          Impulsar la evolución operativa de las industrias de México.
        </h3>


        {/* DESCRIPCIÓN */}
        <p
          className="
            mt-7
            max-w-xl
            text-base
            leading-8
            text-white/55
            sm:text-lg
          "
        >
          A través de soluciones aéreas DJI, acompañamos la
          digitalización de sectores estratégicos proporcionando
          tecnología, conocimiento y soporte para elevar la
          productividad, seguridad y competitividad de las
          organizaciones mexicanas.
        </p>


        {/* LÍNEA INFERIOR */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-20
            bg-[#018C55]
          "
        />

      </article>


      {/* ======================================================
          VISIÓN - DERECHA
      ====================================================== */}

      <article
        className="
          relative
          border-t
          border-white/15
          p-8
          sm:p-10
          lg:min-h-[460px]
          lg:border-l
          lg:border-t-0
          lg:p-12
        "
      >

        {/* NÚMERO */}
        <span
          className="
            absolute
            right-8
            top-8
            text-xs
            font-semibold
            tracking-[0.20em]
            text-white/20
          "
        >
          02
        </span>


        {/* ETIQUETA */}
        <div className="flex items-center gap-3">

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#018C55]
            "
          />

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#018C55]
            "
          >
            Visión 2030
          </p>

        </div>


        {/* TITULO */}
        <h3
          className="
            mt-10
            max-w-xl
            text-3xl
            font-semibold
            leading-[1.1]
            tracking-[-0.035em]
            text-white
            sm:text-4xl
          "
        >
          Ser un referente nacional en la digitalización del cielo mexicano.
        </h3>


        {/* DESCRIPCIÓN */}
        <p
          className="
            mt-7
            max-w-xl
            text-base
            leading-8
            text-white/55
            sm:text-lg
          "
        >
          Aspiramos a consolidarnos como un aliado estratégico
          para una industria más inteligente, sostenible y segura,
          donde las soluciones de MAXIDRONE sean parte de las
          operaciones agrícolas, industriales y empresariales
          del futuro.
        </p>


        {/* LÍNEA INFERIOR */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-20
            bg-[#018C55]
          "
        />

      </article>

    </div>

  </div>

</section>

      {/* ======================================================
          VALORES
      ====================================================== */}

      {/* ======================================================
    VALORES
====================================================== */}

<section
  className="
    border-b
    border-[#181818]
    bg-black
    text-white
  "
>

  <div
    className="
      mx-auto
      max-w-[1440px]
      px-6
      py-16
      sm:px-10
      lg:px-14
      lg:py-20
    "
  >

    <div
      className="
        grid
        gap-10
        lg:grid-cols-[0.75fr_1.25fr]
        lg:gap-14
      "
    >

      {/* ======================================================
          TITULO
      ====================================================== */}

      <div>

        <div className="flex items-center gap-4">

          <span
            className="
              h-[2px]
              w-8
              bg-[#018C55]
            "
          />

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/40
              sm:text-xs
            "
          >
            Nuestra forma de trabajar
          </p>

        </div>


        <h2
          className="
            mt-5
            max-w-[520px]
            text-3xl
            font-semibold
            uppercase
            leading-[1.02]
            tracking-[-0.04em]
            text-white
            sm:text-4xl
            lg:text-[44px]
          "
        >
          En cada vuelo,

          <span
            className="
              block
              text-white/35
            "
          >
            llevamos nuestros
          </span>

          <span className="block">
            valores contigo.
          </span>

        </h2>

      </div>


      {/* ======================================================
          VALORES
      ====================================================== */}

      <div
        className="
          border-t
          border-white/10
        "
      >

        {values.map((value) => (

          <div
            key={value.number}
            className="
              grid
              gap-3
              border-b
              border-white/10
              py-5
              md:grid-cols-[55px_0.8fr_1.25fr]
              md:items-start
              lg:py-6
            "
          >

            {/* NUMERO */}
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-[#018C55]
                sm:text-xs
              "
            >
              {value.number}
            </span>


            {/* TITULO */}
            <h3
              className="
                text-base
                font-semibold
                text-white
                sm:text-lg
              "
            >
              {value.title}
            </h3>


            {/* DESCRIPCIÓN */}
            <p
              className="
                max-w-xl
                text-sm
                leading-6
                text-white/45
              "
            >
              {value.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>

      {/* ======================================================
          INNOVACIÓN CON SENTIDO
      ====================================================== */}

      <section
        className="
          border-b
          border-[#181818]
          bg-black
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            gap-12
            px-6
            py-24
            sm:px-10
            lg:grid-cols-[1fr_1fr]
            lg:px-14
            lg:py-32
          "
        >

          <div>

            <div className="flex items-center gap-4">

              <span className="h-[2px] w-8 bg-[#018C55]" />

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/45
                "
              >
                Nuestro compromiso
              </p>

            </div>


            <h2
              className="
                mt-6
                max-w-xl
                text-4xl
                font-semibold
                uppercase
                leading-[1]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Innovación con sentido.

              <span className="block text-white/35">
                Seguridad con compromiso.
              </span>
            </h2>

          </div>


          <div
            className="
              space-y-7
              text-lg
              leading-8
              text-white/55
            "
          >

            <p>
              En MAXIDRONE no solo nos apasiona la tecnología
              aérea; nos mueve el impacto positivo que puede
              generar en la sociedad, las empresas y el medio
              ambiente.
            </p>

            <p>
              Creemos que la innovación solo genera valor cuando
              se implementa de manera responsable. Por ello,
              buscamos optimizar procesos agrícolas e
              industriales, reducir exposición humana en tareas
              de riesgo y promover operaciones más eficientes.
            </p>

            <p>
              Nuestro objetivo es construir relaciones de largo
              plazo basadas en profesionalismo, transparencia,
              legalidad y acompañamiento especializado.
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          POR QUÉ MAXIDRONE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#080808]
        "
      >

        <div
          className="
            mx-auto
            max-w-[1440px]
            px-6
            py-24
            sm:px-10
            lg:px-14
            lg:py-32
          "
        >

          <div
            className="
              grid
              gap-14
              lg:grid-cols-[1fr_1fr]
            "
          >

            {/* IZQUIERDA */}
            <div>

              <div className="flex items-center gap-4">

                <span className="h-[2px] w-8 bg-[#018C55]" />

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/45
                  "
                >
                  Más que tecnología
                </p>

              </div>


              <h2
                className="
                  mt-6
                  max-w-xl
                  text-4xl
                  font-semibold
                  uppercase
                  tracking-[-0.04em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                ¿Por qué elegir
                <span className="block text-white/40">
                  MAXIDRONE?
                </span>
              </h2>


              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/55
                "
              >
                Porque entendemos que adquirir un dron
                profesional es solo el comienzo. Nuestro trabajo
                consiste en ayudarte a convertir la tecnología
                en una solución funcional para tu operación.
              </p>

            </div>


            {/* DERECHA */}
            <div>

              <div className="border-t border-white/10">

                {differentiators.map((item, index) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      border-b
                      border-white/10
                      py-6
                    "
                  >

                    <span
                      className="
                        mr-6
                        text-xs
                        font-semibold
                        text-[#018C55]
                      "
                    >
                      0{index + 1}
                    </span>

                    <p
                      className="
                        text-lg
                        font-medium
                        text-white
                      "
                    >
                      {item}
                    </p>

                    <span
                      className="
                        ml-auto
                        text-[#018C55]
                      "
                    >
                      +
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* CLIENTES */}
          <div className="mt-24 border-t border-white/10 pt-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#018C55]">
                Experiencia que genera confianza
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Empresas que han trabajado con MAXIDRONE.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                Organizaciones que han confiado en nuestra experiencia,
                tecnología y acompañamiento especializado.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex min-h-32 items-center justify-center overflow-hidden border border-white/10 bg-white px-4 py-3"
                >
                  <Image
                    src={client.logo}
                    alt={`Logotipo de ${client.name}`}
                    width={460}
                    height={160}
                    className={`w-full object-contain ${client.logoClassName}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              mt-24
              border
              border-white/10
              bg-[#111111]
              p-8
              sm:p-12
              lg:p-14
            "
          >

            <div
              className="
                grid
                gap-10
                lg:grid-cols-[1fr_auto]
                lg:items-center
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#018C55]
                  "
                >
                  Conoce nuestras soluciones
                </p>


                <h2
                  className="
                    mt-4
                    max-w-3xl
                    text-3xl
                    font-semibold
                    tracking-[-0.03em]
                    sm:text-4xl
                  "
                >
                  Dos ecosistemas. Una misma visión:
                  transformar tu operación.
                </h2>

              </div>


              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  lg:flex-col
                "
              >

                <Link
                  href="/enterprise"
                  className="
                    inline-flex
                    min-h-14
                    min-w-[220px]
                    items-center
                    justify-between
                    bg-white
                    px-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-black
                    transition
                    hover:bg-[#E5E5E5]
                  "
                >
                  DJI Enterprise
                  <span>→</span>
                </Link>


                <Link
                  href="/agriculture"
                  className="
                    inline-flex
                    min-h-14
                    min-w-[220px]
                    items-center
                    justify-between
                    bg-[#018C55]
                    px-6
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-white
                    transition
                    hover:bg-[#017247]
                  "
                >
                  DJI Agriculture
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
