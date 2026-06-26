import { Race } from "@/types/Race";

export const races: Race[] = [
  {
    id: "nastajiri",
    slug: "nastajiri",
    name: "Nastajiri",
    summary: "",
    description: "Una especie cuya ascensión desde la madurez intermedia hasta las cumbres de la civilización avanzada no fue fruto del azar, sino parte de un designio mucho más complejo. Aunque hoy son conocidos por su naturaleza pacífica, fue la violencia de su pasado la que los preparó para comprender y abrazar los secretos del caos. Forjados en la adversidad, moldearon su propio destino y se alzaron como fervientes defensores del reconocimiento de los «Destellos» y de los extraordinarios dones que estos portan.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "naidul",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "Las misteriosas naves que surcan sus cielos no solo traen consigo enigmas, sino también revelaciones sobre la verdadera esencia de lo que define a una civilización verdaderamente avanzada. Por mandatos superiores, Arsuen jugará un papel importante para dar inicio a los profundos cambios en su especie.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-3",
        text: "Ya consolidados dentro de la Asociación Cealtar Universal, los Nastajiri se ven envueltos en un acontecimiento que los llevará a reencontrarse con el legado de Arsuen.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      }
    ]
  },
  {
    id: "vel-fatith",
    slug: "vel-fatith",
    name: "Vel-Fatith",
    summary: "",
    description: "Abandonada y privada de parte de su memoria, esta especie es conocida por dedicar sus esfuerzos a preservar su material genético mediante la experimentación con formas de vida cercanas. Aunque ignora sus orígenes y las razones de su exilio en un mundo frío e inhóspito, conserva amplios conocimientos científicos y fragmentos de memoria sobre otras especies y las leyes que regulan la paz entre civilizaciones.",
    image: "/images/races/fatith.jpg",
    homeworldId: "enderith-ka",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "La desesperación por preservar su linaje genético, sumada al desconocimiento de sus propios orígenes, ha sembrado un clima de desconfianza y traición constante entre los Fatith. En medio de ese caos, dieron origen sin saberlo a un ser de inmenso poder y traumatizado, cuya única razón de existir es la venganza.",
        alignment: "Hostiles",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "xaofeir",
    slug: "xaofeir",
    name: "Xaofeir",
    summary: "",
    description: "Es una especie avanzada que forma parte de la Asociación Cealtar Universal, una organización dedicada a la protección y supervisión de especies primitivas e intermedias. Son reconocidos por sus fuertes habilidades mentales y capacidades visuales que pocas especies son capaces de alcanzar.",
    image: "/images/races/fatith.jpg",
    homeworldId: "orvendar",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "Nafim expone, a través de sus enseñanzas, que la convivencia entre especies requiere tanto de un orden estructurado como de la presencia inevitable del caos.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      },
      {
        bookId: "book3",
        eraId: "era-3",
        text: "Tras un encuentro inesperado de varias especies, Dehuga reúne a distintas especies de la Asociación Cealtar Universal con el propósito de recordar el pasado y tomar una decisión determinante, mientras guarda un as bajo la manga.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      }
    ]
  },
  {
    id: "vel-verlander",
    slug: "vel-verlander",
    name: "Vel-Verlander",
    summary: "",
    description: "Abandonados junto a los Fatith, esta especie parece no mostrar interés en recordar su pasado ni sus orígenes. Han sido utilizados como herramientas por los Fatith para llevar a cabo tareas que estos no pueden realizar directamente, y estos simplemente se dedican a obedecer.",
    image: "/images/races/fatith.jpg",
    homeworldId: "enderith-ka",
    FirstBook: ["book1"],
    appearances: [
      {
        bookId: "book1",
        eraId: "era-1",
        text: "Su función consiste en realizar experimentos con diversas especies, así como mediciones ambientales en distintos planetas, en nombre de los Fatith.",
        alignment: "Hostiles",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "ratti-pem-ya",
    slug: "ratti-pem-ya",
    name: "Ratti Pem'ya",
    summary: "",
    description: "Esta especie permaneció al margen del contacto interestelar durante mucho tiempo, obedeciendo el consejo de una enigmática deidad que habitaba las profundidades de las cuevas de su mundo natal. Su aislamiento no fue fruto del temor, sino de una espera deliberada; sin embargo, un acontecimiento sin precedentes quebró aquel antiguo equilibrio y los obligó a alzar la mirada hacia las estrellas para comenzar a formar parte de ellas.",
    image: "/images/races/fatith.jpg",
    homeworldId: "iliar",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Tras una serie de eventos desastrosos en su planeta, aislado del contacto externo, los Ratti se ven envueltos en una situación que pondrá en riesgo el orden y la paz que han intentado preservar.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Su papel no consiste únicamente en servir de vínculo entre varias especies distintas, sino también en influir indirectamente en la voluntad de un individuo hacia fines que le resultarían impensables.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "noc-auli",
    slug: "noc-auli",
    name: "Noc-Auli",
    summary: "",
    description: "Nacidos del artificio y despojados de toda voluntad propia, esta especie clónica y de mente colmena fue creada para servir a los hostiles como una fuerza obediente e inagotable. Durante generaciones fueron poco más que herramientas vivientes, hasta que una serie de experimentos dio origen a una anomalía imposible: una facción conocida como «la Mezcla». Y es que, en aquellos seres comenzó a despertar el fugaz destello de la consciencia como un eco de individualidad.",
    image: "/images/races/fatith.jpg",
    homeworldId: "aumun",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Tras una serie de eventos desastrosos en su planeta, aislado del contacto externo, los Ratti se ven envueltos en una situación que pondrá en riesgo el orden y la paz que han intentado preservar.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Su papel no consiste únicamente en servir de vínculo entre varias especies distintas, sino también en influir indirectamente en la voluntad de un individuo hacia fines que le resultarían impensables.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "tailyas",
    slug: "tailyas",
    name: "Taílyas",
    summary: "",
    description: "Durante incontables generaciones, esta especie evolucionó siguiendo un curso casi natural, aunque siempre bajo la silenciosa vigilancia de especies que observaban cada uno de sus pasos. Ignoraban que su historia había sido contemplada desde lejos, hasta el día en que el encuentro con los Mugtatarios desveló la verdad sobre su papel en la historia. Desde entonces, su destino dejó de pertenecerles por completo, y su civilización quedó atrapada en una lucha constante entre lealtades enfrentadas, debatiéndose sin descanso sobre qué facción merece realmente heredar el porvenir del universo entero.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "camelic",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Tras su llegada al planeta Mugta, se adentrarán en los complejos conceptos que rigen la realidad, así como en los conflictos que prevalecen entre las facciones. Encoa deberá tomar una decisión que definirá el lugar de su especie en el universo.",
        alignment: "Benévolos",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "A medida que los Taílyas se adentran en el conflicto entre especies, comienzan a preguntarse si realmente están del lado correcto, lo que los impulsa a cuestionar su papel y a buscar su verdadero lugar en todo este conflicto cada vez más preocupante.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio-Tiempo"],
      }
    ]
  },
  {
    id: "mugtatarios",
    slug: "mugtatarios",
    name: "Mugtatarios",
    summary: "",
    description: "Desde mucho antes de que los Taílyas alzaran la vista hacia las estrellas, esta antigua especie siguió de cerca su evolución, movida por un interés que trasciende la simple curiosidad. Como una de las civilizaciones fundadoras de la Orden Cósmica, se ha convertido en uno de los actores más influyentes en su desarrollo, decidido a guiarlos para que recorran el mismo sendero que apoye a sus intereses.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "mugta",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Al recibir la visita de los Taílyas, les revelarán los conflictos que se ciernen entre las especies que deberían estar del mismo lado, pero que por razones compljas, se han divivido. Por su parte, Nálika permite a Encoa decidir si desea formar parte de una misión donde pondrán su vida en riesgo.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio"],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "Con el fin de alcanzar su objetivo final, intentan proteger el cuerpo de Nálika mientras adaptan sus defensas a las circunstancias externas que afectan a sus aliados, aunque la situación terminará escapándoseles de las manos.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio-Tiempo"],
      }
    ]
  },
  {
    id: "guas",
    slug: "guas",
    name: "Gúas",
    summary: "",
    description: "El nombre de esta especie quedó grabado en la historia durante la última gran era bélica, cuando Ignua ascendió al poder temporalmente con la firme determinación de doblegar a una especie hostil. Los Gúas revelaron una capacidad militar extraordinaria: implacables en el combate, inexorables en su avance y dueños de una superioridad estratégica que convirtió cada enfrentamiento en una demostración de su poder.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Se distinguen como una especie guerrera, especialmente valiosa en tiempos de conflicto, durante los cuales su liderazgo suele cambiar de forma temporal para adaptarse a las exigencias de la guerra.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio"],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "Tras la desaparición de Olen y el retroceso de los Nandia, los Gúas asumen el control de la defensa planetaria con el objetivo de salvaguardar la misión de la Orden Cósmica. Sin embargo, sus decisiones orientadas a la guerra desencadenarán una serie de acontecimientos que agravarán aún más la situación a escala global.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio-Tiempo"],
      }
    ]
  },
  {
    id: "assul",
    slug: "assul",
    name: "Assul",
    summary: "",
    description: "Esta especie surgió hace mucho tiempo como resultado de la modificación genética de razas hostiles. De aquella mezcla nacieron individuos cuyas decisiones y formas de comunicación dependen más de sus sentidos que de la razón. Lejos de ser una desventaja, esta cualidad les resulta eficaz, ya que sus cuerpos están adaptados para emitir distintos aromas según su estado emocional y condición física.  Junto a los Mugtatarios, fundaron la Orden Cósmica con el propósito de proteger el Destello de Nálika. Desde entonces, se comprometieron a acoger en sus filas a cualquier raza dispuesta a entregarlo todo por esa causa, incluso si carecía de una gran fuerza militar.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Los Assul se presentan como una especie que, pese a ser fundadora de la Orden Cósmica del Espacio junto a los Mugtatarios, mantiene alianzas externas a dicha organización con el fin de adaptarse y sobrevivir en un universo marcado por intereses diversos.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio"],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "Se erigen como los principales castigadores de los Nandia tras su reclusión en su planeta. Los Assul aprovechan esta situación para inclinar sus alianzas externas a su favor y fortalecer su posición.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio-Tiempo"],
      }
    ]
  },
  {
    id: "fegiste",
    slug: "fegiste",
    name: "Fegiste",
    summary: "",
    description: "Los Fegiste, concebidos originalmente como una especie al servicio de razas hostiles, fueron abandonados tras un experimento fallido que les otorgó consciencia. A partir de entonces, evolucionaron de manera independiente, desarrollando un profundo interés por comprender los sentimientos de otras especies, ya que ellos eran incapaces de experimentarlos en su totalidad. Esta curiosidad los llevó a entrar en contacto con los Mugtatarios, a quienes inicialmente estudiaron y con quienes, más adelante, formaron una alianza. Su decisión de apoyar a la Orden Cósmica surgió tanto de este vínculo como de las oportunidades de investigación que los Mugtatarios les ofrecían sobre su propia naturaleza, en un intercambio que fortalecía a ambas partes.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Se presentan como una especie de naturaleza inocente, aunque profundamente influenciada por las razas hostiles.",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio"],
      }
    ]
  },
  {
    id: "nandia",
    slug: "nandia",
    name: "Nandia",
    summary: "",
    description: "En el pasado, los Nandia se vieron envueltos en una devastadora guerra interna que quebró el espíritu de toda su población. El conflicto surgió de una profunda división entre quienes defendían el progreso tecnológico y quienes perseguían el desarrollo espiritual. Cuando la guerra se descontroló, sus consecuencias resultaron catastróficas para ambos bandos. Con el tiempo, se alcanzó un tratado de paz en el que las dos principales líneas sanguíneas, origen del conflicto, acordaron compartir el poder y dirigir sus respectivas actividades conforme a sus propios intereses.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book2"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Se presenta como una raza marcada por intensos conflictos internos en su pasado, cuyo orden actual se sostiene de forma frágil e inestable.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio"],
      },
      {
        bookId: "book3",
        eraId: "era-2",
        text: "Tras la desaparición de su líder, la estrategia defensiva de la Orden Cósmica se ve profundamente afectada debido a la reclusión en su planeta. Esta inestabilidad interna desencadena un cambio radical en su posición dentro del escenario universal.",
        alignment: "Benévolos",
        faction: "",
        organizations: ["Orden Cósmica Protectora del Espacio-Tiempo"],
      }
    ]
  },
  {
    id: "krks",
    slug: "krks",
    name: "Krks",
    summary: "",
    description: "Especie fuertemente orientada a la experimentación y a la conquista. Su líder forma parte del enigmático círculo de «los Trece», posicionándolos como una especie ampliamente dominante entre las especies conocidas como «hostiles», aunque dicho líder ha cambiado en múltiples ocasiones y no han logrado mantener siempre la misma convicción.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "aumun",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-2",
        text: "El castigo impuesto a un individuo rebelde terminará por sacar a la luz una situación que podría fortalecer la posición de su especie ante el círculo de «los Trece». El primero del círculo hace su aparición, demostrando que la crueldad es grande, pero la sabiduría lo es más.",
        alignment: "Hostiles",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "dutim",
    slug: "dutim",
    name: "Dutim",
    summary: "",
    description: "Historiadores por naturaleza, dedican su existencia a investigar, preservar y difundir el conocimiento sobre los acontecimientos más trascendentales de la historia del universo. Recorren los confines del cosmos compartiendo este legado con aquellas especies lo suficientemente desarrolladas y preparadas para comprenderlo. Su misión principal, en colaboración con otras civilizaciones dedicadas al estudio histórico, es salvaguardar la memoria de la existencia y garantizar que los hechos permanezcan fieles a la verdad. Se esfuerzan por evitar que los grandes eventos del pasado se deformen con el tiempo, se conviertan en simples mitos o sean alterados por intereses políticos, ideológicos o culturales.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Como custodios de la memoria universal, poseen el conocimiento necesario para revelar la historia del Pacto Ancestral, el acuerdo que en tiempos remotos vinculó a las especies que hoy, separadas por conflictos y diferencias irreconciliables, son conocidas como los «benévolos» y los «hostiles».",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      }
    ]
  },
  {
    id: "egiara",
    slug: "egiara",
    name: "Egiara",
    summary: "",
    description: "Carecen de visión y olfato, percibiendo su entorno mediante complejos impulsos bioeléctricos transmitidos a través de sus raíces, capaces de contraerse y extenderse a voluntad. Comparten conocimientos mediante el contacto subterráneo de estas raíces, en sesiones que pueden prolongarse hasta dos ciclos planetarios. Gracias a su longevidad, que supera los quinientos ciclos, conservan y transmiten información con una precisión excepcional.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Gracias a sus conocimientos ancestrales, son capaces de revelar los secretos que rodean la fundación de «los Trece», uno de los acontecimientos más trascendentales de la historia conocida.",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      }
    ]
  },
  {
    id: "raugari",
    slug: "raugari",
    name: "Raugari",
    summary: "",
    description: "Una especie anfibia capaz de habitar tanto bajo el agua como en tierra firme. Su ciclo reproductivo está estrechamente ligado al océano, donde transcurre la gestación para absorber las propiedades minerales y energéticas de los mares de su planeta. Son reconocidos como la primera especie en descubrir el poder de un «Destello», una fuerza considerada imposible para el resto de especies, lo cual, sumado a una crisis universal, generó un conflicto sin prescedentes en tiempos remotos.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "En el pasado, enfrentaron una grave crisis cuando uno de sus habitantes resultó poseer una habilidad que se expuso como una posible cura para una enfermedad mortal que amenazaba el tiempo de vida de las especies en todo el universo.",
        faction: "",
        organizations: ["Asociación Cealtar Universal"],
      }
    ]
  },
  {
    id: "ecdaum",
    slug: "ecdaum",
    name: "Ecdaum",
    summary: "",
    description: "Una raza temeraria que acostumbra llevar sus planes hasta las últimas consecuencias, sin dejarse detener por los riesgos o las posibles repercusiones. Aunque nunca se han considerado hostiles, figuran entre las especies menos emocionales del Anillo Estelar. Su comportamiento suele percibirse como frío o impulsivo, pero responde a una filosofía basada en la acción directa y la resolución práctica de los problemas.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "farga",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book2",
        eraId: "era-1",
        text: "Siguiendo un plan de los Guardianes, establecen contacto con Encoa por medios poco convencionales, decididos a persuadirlo de que su bando representa el camino correcto.",
        faction: "",
        organizations: [""],
      },
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Tras la intervensión realizada con Encoa, activan un plan que implica una grave transgresión de las leyes universales que rigen a todas las especies.",
        faction: "",
        organizations: ["Vinculación de Prevención"],
      }
    ]
  },
  {
    id: "ania",
    slug: "ania",
    name: "Ania",
    summary: "",
    description: "Es una especie adaptada tanto a la tierra como al mar, aunque su entorno preferido es el segundo. Bajo el agua, su cuerpo se vuelve flexible y desarrolla varios tentáculos que le permiten impulsarse y manipular objetos con precisión; al exponerse al aire, estos se fusionan progresivamente y se endurecen, transformándose en extremidades firmes capaces de sostener su peso, facilitar la locomoción y protegerlos de la radiación solar. Mantienen alianzas por fuera de la Vinculación, en particular con especies hostiles, a través de las cuales intercambian minerales raros y recursos alimenticios.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Para apoyar el plan de los Ecdaum, los Ania deciden intervenir en las filas de los hostiles con el objetivo de obtener el resto de los Destellos en su poder.",
        faction: "",
        organizations: ["Vinculación de Prevención"],
      }
    ]
  },
  {
    id: "ittu",
    slug: "ittu",
    name: "Ittu",
    summary: "",
    description: "Esta especie se erige como el principal consumidor de la tecnología de los Au-lert, la cual adoptan por una afinidad a sus ideologías bélicas ocultas, ya que, como parte de los Seoseres, no les es permitido participar en cualquier tipo de enfrentamientos ni tomar parte en los conflictos universales, aunque así lo hagan.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Se posicionan como los principales atacantes en el plan de la Vinculación de Prevención, por lo que su intervención marca el inicio de un conflicto sin precedentes.",
        faction: "",
        organizations: ["Vinculación de Prevención"],
      }
    ]
  },
  {
    id: "au-lert",
    slug: "au-lert",
    name: "Au-lert",
    summary: "",
    description: "Su creatividad para desarrollar una amplia diversidad de armas y adaptarlas a distintos principios físicos y energéticos les ha permitido establecer acuerdos con múltiples especies interesadas en sus creaciones, consolidándose como uno de los principales proveedores armamentísticos de su sector, aunque en sus inicios, su alcance abarcaba desde civilizaciones emergentes hasta las más consolidadas del Anillo.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Utilizan su poder armamentístico para proteger los planetas Guardianes mientras un plan se ejecuta entre las sombras y en distintos frentes.",
        faction: "",
        organizations: ["Vinculación de Prevención"],
      }
    ]
  },
  {
    id: "itsher",
    slug: "itsher",
    name: "Itsher",
    summary: "",
    description: "Una especie extraordinariamente longeva que ha optado por no trascender hasta que el pacto entre benévolos y hostiles se rompa. Su propósito es vigilar el equilibrio entre ambas facciones, interviniendo únicamente cuando la estabilidad universal se vea realmente comprometida.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Se erigen como los principales ejecutores de un antiguo plan destinado a instaurar una paz duradera entre las especies, delimitando las experimenteciones hostiles a cambio de una vigilancia constante en pos del progreso.",
        faction: "",
        organizations: [""],
      }
    ]
  },
  {
    id: "astaronte",
    slug: "astaronte",
    name: "Astaronte",
    summary: "",
    description: "Esta especie se alza como una de las principales mediadoras entre los innumerables conflictos que desgarran el universo, portando sobre sus hombros la frágil esperanza de equilibrio entre civilizaciones enfrentadas. Se dice que su sola presencia en el campo de batalla es suficiente para detener las guerras, pues su avanzada tecnología bélica suele ser superior a la de las grandes potencias.",
    image: "/images/races/nastajiri.jpg",
    homeworldId: "No revelado",
    FirstBook: ["book3"],
    appearances: [
      {
        bookId: "book3",
        eraId: "era-1",
        text: "Tras una serie de eventos que desencadenan el desastre, los Itsher buscan ampliar sus filas mientras exhiben su poderío. Su papel será clave en la decisión que los Taílyas deberán tomar para asegurar su lugar entre las especies del universo.",
        faction: "",
        organizations: [""],
      }
    ]
  },
];