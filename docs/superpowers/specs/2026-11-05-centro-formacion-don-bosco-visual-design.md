# Centro de Formación Don Bosco de Cobija — Diseño visual y de contenido

## Intención

Convertir la landing estática existente en una página institucional clara, cálida y creíble para estudiantes, familias, docentes y visitantes de Cobija. La mejora debe resolver la sensación actual de sitio incompleto eliminando textos de demostración, reduciendo repeticiones visuales y usando la información confirmada por la persona responsable del proyecto.

La propuesta conserva Express, HTML, CSS y JavaScript sin introducir dependencias nuevas ni un panel administrativo. El sitio seguirá siendo una página informativa local, preparada para que posteriormente se agreguen noticias, eventos y datos oficiales adicionales.

## Objetivos

- Presentar como nombre principal “Centro de Formación Don Bosco de Cobija”.
- Comunicar claramente sus dos servicios actuales: clases de computación y asistencia pedagógica.
- Incorporar autoridad y horario de atención en zonas de alta visibilidad.
- Dar profundidad institucional mediante historia, misión, visión y valores sugeridos desde el carisma salesiano.
- Hacer que la página se sienta completa usando las imágenes disponibles sin repetirlas de forma excesiva.
- Mantener navegación responsive, accesible y ligera.
- Distinguir contenido confirmado de textos sugeridos pendientes de validación institucional.

## No objetivos

- No inventar fechas, promociones, testimonios, estadísticas, carreras, convenios ni logros locales.
- No construir un CMS, autenticación, base de datos ni panel de noticias.
- No conectar todavía el formulario a un backend externo.
- No publicar el sitio ni cambiar su hosting desde este repositorio.
- No eliminar las modificaciones existentes que ya cambiaron el nombre del instituto y conservaron datos de contacto.

## Antiobjetivos

- Evitar una página saturada de tarjetas genéricas o de texto de relleno.
- Evitar presentar como hechos la historia específica de la sede de Cobija sin una fuente institucional.
- Evitar mantener bloques que digan “espacio para agregar”, “ejemplo” o “puede actualizarse” como contenido principal visible.

## Restricciones y datos confirmados

- Nombre: Centro de Formación Don Bosco de Cobija.
- Oferta actual: clases de computación y asistencia pedagógica.
- Autoridad: Padre Germán Barrera Blanco.
- Horario de atención: 08:00–12:00 y 14:00–18:00.
- Lugar: Cobija, Pando, Bolivia.
- Recursos existentes: fachada, letrero, laboratorio de computación, placa institucional y San Juan Bosco.
- Stack existente: Node.js, Express, HTML, CSS y JavaScript vanilla.
- Deben conservarse las modificaciones no relacionadas ya presentes en `public/index.html`.

## Contenido institucional propuesto

Estos textos se redactarán como propuesta basada en fuentes salesianas y deben poder confirmarse o editarse fácilmente después.

### Historia

Presentar brevemente a San Juan Bosco como educador y sacerdote italiano que dedicó su obra a acompañar y formar a niños y jóvenes, especialmente a quienes tenían menos oportunidades. Explicar que el enfoque salesiano combina educación, acompañamiento, comunidad y formación para la vida. No atribuir una fecha de fundación ni hechos concretos al centro de Cobija hasta recibirlos.

### Misión sugerida

“Acompañar la formación integral de niños, jóvenes y familias mediante oportunidades de aprendizaje en computación y apoyo pedagógico, inspirados en el estilo educativo de Don Bosco, con cercanía, responsabilidad y compromiso con la comunidad.”

### Visión sugerida

“Ser un centro de referencia en Cobija por brindar formación accesible, acompañamiento pedagógico y herramientas digitales que ayuden a cada persona a desarrollar sus capacidades y construir un mejor proyecto de vida.”

### Valores sugeridos

Responsabilidad, respeto, solidaridad, honestidad, servicio, cercanía educativa y esperanza. La presentación debe relacionarlos con la educación salesiana sin afirmar que son la lista oficial hasta su confirmación.

## Enfoques considerados

### 1. Institucional sobrio

Azul, blanco y dorado; tipografía limpia, jerarquía fuerte, horarios y contacto visibles. Es fácil de mantener y transmite confianza a familias y autoridades, pero puede sentirse poco comunitario.

### 2. Salesiano/comunitario

Mantiene la base institucional, pero da más peso a la historia de Don Bosco, los valores, el acompañamiento y las fotografías de la comunidad. Comunica mejor la identidad del centro sin necesitar inventar funcionalidades.

### 3. Académico moderno

Destaca cursos, capacidades digitales, estadísticas y llamados a inscripción. Es atractivo para captar estudiantes, pero exigiría datos de oferta, cupos, fechas y resultados que todavía no están confirmados.

### Decisión

Se adopta una combinación de los enfoques 1 y 2: una portada institucional sólida con una narrativa salesiana/comunitaria. El enfoque académico moderno queda como posible segunda etapa cuando el centro entregue detalles de cursos, requisitos, duración y próximas inscripciones.

## Dirección visual y estructura

1. **Cabecera y hero:** nombre oficial, mensaje centrado en formación y acompañamiento, fotografía de fachada, botones “Conocer el centro” y “Ver servicios”, autoridad y horario como dato destacado.
2. **Identidad institucional:** historia sugerida de Don Bosco junto a una composición de imagen y una tarjeta de misión/visión.
3. **Servicios:** dos tarjetas principales para “Clases de computación” y “Asistencia pedagógica”, más una franja de valores o beneficios sin estadísticas inventadas.
4. **Comunidad y novedades:** reemplazar noticias ficticias por una presentación editorial de los tipos de comunicados que se podrán publicar y una agenda visual que use el horario de atención; no inventar fechas.
5. **Galería:** mosaico asimétrico con las cinco imágenes disponibles, sin recuadro vacío. Cada imagen tendrá texto alternativo específico.
6. **Preguntas frecuentes:** incluir respuestas sobre servicios, atención, público destinatario y cómo solicitar información.
7. **Contacto:** autoridad, horario, ubicación general y los datos de contacto ya presentes en el archivo, conservándolos pero dejándolos marcados para confirmación. El formulario seguirá siendo demostrativo hasta conectar un servicio real.
8. **Pie de página:** nombre oficial, año, navegación breve y mensaje de identidad institucional.

## Interacción y accesibilidad

- Mantener menú móvil y acordeón de preguntas.
- Mejorar el estado de foco visible para enlaces, botones e inputs.
- Mantener contraste suficiente en fondos azules y tarjetas.
- Respetar `prefers-reduced-motion` para reducir animaciones cuando el visitante lo solicite.
- Mantener textos alternativos y HTML semántico.
- No depender de emojis como único indicador visual; pueden acompañar, pero el texto debe comunicar por sí solo.

## Verificación prevista

- `node --check public/script.js`.
- Comprobación de que el servidor Express arranca y sirve `/`.
- Revisión de enlaces internos, imágenes existentes, navegación móvil, acordeón y menú.
- `git diff --check`.
- Revisión visual en escritorio y móvil, verificando que no queden frases de contenido de demostración en las zonas principales.

## Fuentes consultadas para el texto sugerido

- Sistema Preventivo de Don Bosco, Salesianos: https://salesianos.info/sistemapreventivo/
- Misión de los Salesianos de Don Bosco: https://salesianos.info/wp-content/uploads/2019/01/DOSSIER-SALESIANOS-2019.pdf
- Referencia educativa salesiana de misión, visión y valores: https://donbosco.edu.do/mision-vision-y-valores/

Estas fuentes sirven para el marco salesiano general. No se encontró una fuente pública verificable que documente la historia específica del Centro de Formación Don Bosco de Cobija, por lo que esa parte queda explícitamente como propuesta pendiente de confirmación.

## Resoluciones del builder check

- La persona responsable autorizó completar el contenido institucional con una propuesta basada en fuentes salesianas; se publicará con una nota breve de “contenido sugerido para validación institucional”.
- Se conservarán los datos de contacto que ya estaban en el archivo modificado, pero no se presentarán como confirmados en la documentación de entrega.
- Los servicios se describirán únicamente con la información confirmada: clases de computación y asistencia pedagógica. Costos, duración, requisitos, cupos y modalidad quedan fuera hasta recibirlos.
- El formulario continuará siendo demostrativo y no enviará datos.
- La página priorizará a la comunidad educativa completa, con estudiantes y familias como audiencia principal y el contacto como acción principal.
