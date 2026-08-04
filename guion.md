# **GUION Y CONTENIDO DE PRESENTACIÓN: CIBERSEGURIDAD Y PROTECCIÓN DE DATOS EN HOSPITALES (OIV)**

## **PARTE 1: ESTRUCTURA NORMATIVA SIMPLIFICADA CON POP-UPS TÉCNICOS (SLIDES 1 A 4\)**

### **📄 Diapositiva 1: Portada e Introducción**

* **Título:** Marco Normativo de Ciberseguridad y Protección de Datos  
* **Subtítulo:** Cumplimiento de Obligaciones Legales Institucionales (Ley N° 21.663 y Ley N° 21.719)  
* **Texto de Lámina:**  
  * Clasificación del Hospital como Operador de Importancia Vital (OIV).  
  * Responsabilidad individual en el cumplimiento de controles técnicos e instructivos sectoriales.  
* **Guion del Expositor:**  
* *"Buenos días / tardes. La presente sesión aborda las exigencias legales que rigen el tratamiento de la información y la infraestructura digital en nuestra institución. El cumplimiento de estas normas es obligatorio para todo el personal, independientemente de su régimen contractual. Analizaremos las implicancias jurídicas directas sobre el puesto de trabajo y las conductas requeridas para dar cumplimiento al marco regulatorio vigente."*

### **📄 Diapositiva 2: Simulación QR – Comportamiento de Usuarios (Phishing Físico / QShing)**

* **Título:** Simulación QR: Comportamiento de Usuarios ante Cartel Publicitario  
* **Subtítulo:** Medición de Accesos a Código QR Promocional ("Nueva Cafetería") en Pasillos del Hospital (03 de Agosto de 2026)  
* **Texto de Lámina:**  
  * **Conteo Total:** 30 accesos exitosos registrados (peticiones HTTP 200 a `/qr/` y `/qr/logo.png`).  
  * **Distribución de Horarios (UTC-4):**  
    * 10:00 - 10:59 hrs: 4 accesos (Consulta de logo vía Google Images proxy y acceso inicial).  
    * **11:00 - 11:59 hrs:** **12 accesos (40%)** — *Pico máximo durante el horario de café del personal*.  
    * 12:00 - 12:59 hrs: 3 accesos (Derivados desde `me-qr.com`).  
    * 13:00 - 13:59 hrs: 3 accesos.  
    * 15:00 - 15:59 hrs: 6 accesos (Segundo pico en horario de descanso de tarde).  
    * 16:00 - 16:59 hrs: 1 acceso (Referer Google Keep).  
    * 21:00 - 21:59 hrs: 3 accesos (Visitas en turno nocturno).  
  * **Riesgo de Ciberseguridad (QShing):** Exposición de la confianza del entorno hospitalario ante cebos físicos y vectores de infección en dispositivos móviles (BYOD).  
* **Guion del Expositor:**  
* *"En esta lámina analizamos un experimento de campo realizado en los pasillos del hospital: la colocación de un aviso promocional con un código QR que ofrecía descuentos en una nueva cafetería. Durante el 3 de agosto de 2026 registramos un total de 30 accesos exitosos a la ruta simulada. El 40% de las lecturas se concentraron en el horario de café entre las 11:00 y 12:00 hrs. Este ejercicio demuestra la vulnerabilidad frente a vectores de Phishing Físico o QShing, donde la curiosidad impulsa a los usuarios a escanear enlaces no verificados en el entorno hospitalario."*

### **📄 Diapositiva 3: Ley N° 21.663 – Operador de Importancia Vital (OIV)**

* **Título:** Ley Marco de Ciberseguridad N° 21.663: Exigencias y Tiempos de Respuesta  
* **Texto de Lámina:**  
  * **Categoría:** Servicio Esencial / OIV.  
  * **Exigencia:** Implementación continua de medidas de ciberseguridad y planes de continuidad operacional.  
  * **Ventana de Reporte:** Notificación obligatoria de incidentes significativos a la ANCI y CSIRT Nacional dentro del plazo máximo de **3 horas** desde su detección.  
* **Guion del Expositor:**  
* *"Bajo la Ley N° 21.663, el hospital está clasificado como Operador de Importancia Vital. La ley obliga a mantener la operación continua de los sistemas y a reportar cualquier evento anómalo dentro de un límite estricto de 3 horas. La detección oportuna en el equipo de usuario es el insumo inicial necesario para activar el protocolo de contención institucional. Despleguemos el detalle técnico de esta ley."*

#### **💬 Pop-up Interactivo 1: Detalle Normativo Ley N° 21.663 y Decreto N° 295**

* **Gobernanza y Sanciones:**  
  * **Art. 4° y 8° (Ley N° 21.663):** Obliga a implementar un Sistema de Gestión de Seguridad de la Información (SGSI) permanente, realizar revisión continua de redes/endpoints y mantener planes de continuidad probados.  
  * **Proceso de Reporte Escalonado (Decreto N° 295 / ANCI):**  
    1. *Alerta Temprana:* Notificación inicial a la ANCI en un plazo máximo de **3 horas** tras la detección del incidente.  
    2. *Actualización de Estado:* Informe de avance a las **72 horas**.  
    3. *Informe Final:* Cierre de análisis de causa raíz y mitigación a los **15 días corridos**.  
  * **Régimen Sancionatorio (Art. 38):** El incumplimiento de las directivas de ciberseguridad o la omisión del reporte de incidentes significativos conlleva multas gravísimas para la institución y responsabilidades administrativas directas para los involucrados.

### **📄 Diapositiva 3: Leyes N° 20.584 y N° 21.719 – Tratamiento de Datos Personales**

* **Título:** Privacidad de Datos y Control de Acceso por Rol (RBAC)  
* **Texto de Lámina:**  
  * **Ley N° 20.584:** Reserva legal de la Ficha Clínica y trazabilidad de registros.  
  * **Ley N° 21.719:** Clasificación de datos de salud como datos sensibles.  
  * **Auditabilidad:** Registro sistemático de accesos (logs) mediante identidades nominativas.  
* **Guion del Expositor:**  
* *"El tratamiento de los datos personales y de salud está regulado por la Ley N° 20.584 y la Ley N° 21.719. El acceso a las bases de datos corporativas está limitado al principio de necesidad de saber y al rol asignado a la función del trabajador. Toda consulta en el sistema queda registrada en bitácoras de auditoría no modificables. Veamos los derechos y deberes asociados en el siguiente pop-up."*

#### **💬 Pop-up Interactivo 2: Detalle Normativo Ley N° 21.719 y Ley N° 20.584**

* **Bases de Licitud y Gestión de Privacidad:**  
  * **Protección de Datos Sensibles (Ley N° 21.719):** Los datos clínicos, biológicos y de identificación son de categoría sensible. Su procesamiento no autorizado constituye una infracción legal grave.  
  * **Derechos ARCOP:** Modifica la Ley N° 19.628 e introduce formalmente los derechos de Acceso, Rectificación, Supresión (Cancelación), Oposición y Portabilidad de datos para los titulares.  
  * **Delegado de Protección de Datos (DPO):** Exige la designación formal de un DPO con autonomía funcional ante la Agencia de Protección de Datos Personales (para hospitales públicos, debe pertenecer a la dotación vigente).  
  * **Propiedad de la Ficha Clínica (Ley N° 20.584 / Ley N° 21.668):** La ficha médica pertenece al paciente. El personal sólo tiene autorización de acceso respecto de pacientes bajo su relación terapéutica directa o función administrativa habilitada. Todo acceso fuera de este margen se audita como infracción de confidencialidad.

### **📄 Diapositiva 4: Instructivos MINSAL y Políticas Locales**

* **Título:** Estándares Técnicos Directos: ITS-NC-007 y Políticas SGSI  
* **Texto de Lámina:**  
  * **Instructivo ITS-NC-007 v2.0:** Estándares mínimos de ciberseguridad sectorial.  
  * **Política PS-NC-007:** Control de escritorios y pantallas limpias.  
  * **Control de Identidad:** Credenciales nominativas e intransferibles \+ Autenticación Multifactor (MFA) obligatoria.  
* **Guion del Expositor:**  
* *"El Ministerio de Salud operativiza estas leyes mediante el Instructivo ITS-NC-007 y sus resoluciones complementarias. Este marco establece normas de obligatorio cumplimiento: prohibición absoluta de compartir credenciales, uso obligatorio de autenticación multifactor y el bloqueo sistemático de la pantalla al ausentarse de la estación de trabajo. Revisemos las exigencias operativas específicas."*

#### **💬 Pop-up Interactivo 3: Detalle de Instructivos MINSAL y Normativa Complementaria**

* **Controles Operativos y Contratos (MINSAL):**  
  * **Instructivo ITS-NC-007 v2.0:** Exige la aplicación de la norma NCh-ISO/IEC 27001, obligando al uso de credenciales individuales, rotación periódica de contraseñas complejas (mínimo 12 caracteres) y la habilitación de MFA para todo acceso a datos sensibles.  
  * **Instructivo ITS-NC-006 / Res. Exenta N° 850:** Obliga a incluir anexos y cláusulas de ciberseguridad y protección de datos en todas las compras y convenios con proveedores de software o equipamiento tecnológico. Exige a los terceros notificar vulnerabilidades e incidentes en tiempos compatibles con la ANCI.  
  * **Instrucción General N° 4 (ANCI):** Ante sospecha de compromiso de credenciales o ataque, mandata el aislamiento inmediato a nivel de red (EDR/MDR) y la revocación de la sesión para evitar desplazamientos laterales dentro del perímetro hospitalario.  
  * 

## **PARTE 2: EJEMPLOS DE CONDUCTAS SEGÚN MARCO NORMATIVO**

| Ámbito Normativo | Exigencia Legal / Técnica | ❌ Conducta Inapropiada (Infracción) | ✅ Conducta Apropiada (Cumplimiento) |
| :---- | :---- | :---- | :---- |
| **Ley N° 21.663 (OIV)** | Continuidad operativa y reporte inmediato de incidentes en ≤ 3 horas. | Ocultar comportamientos anómalos o bloqueos de pantalla por extorsión para evitar fiscalizaciones. | Notificar de forma inmediata a Soporte TI / CISO tras detectar un fallo o mensaje inusual. |
| **Ley N° 21.719 / N° 20.584** | Resguardo de datos sensibles y acceso exclusivo por rol asignado (RBAC). | Consultar registros o historiales de terceros por interés personal, familiar o curioso. | Acceder únicamente a la información requerida de forma estricta para el cumplimiento de las funciones del cargo. |
| **ITS-NC-007 (MINSAL)** | Credenciales nominativas e implementación de MFA. | Compartir el usuario y clave con compañeros de turno o practicantes. | Ingresar exclusivamente con cuenta propia y validar el acceso mediante el segundo factor autorizado (MFA). |
| **Política PS-NC-007** | Control físico y visual de las estaciones de trabajo. | Ausentarse del escritorio dejando la sesión de usuario abierta o anotar claves en soportes físicos visibles. | Bloquear la sesión del sistema (Win \+ L) al levantarse del puesto y resguardar claves en gestores autorizados. |
| **Política PS-NC-004** | Uso exclusivo de canales e infraestructura oficial. | Enviar archivos con datos institucionales a través de WhatsApp o correos personales. | Almacenar y transmitir documentos utilizando repositorios oficiales institucionales y correo corporativo. |

## 

### **Parte 3\.**

### **Tabla de Clasificación Sintética de Incidentes**

| Eje Analítico | Qué Mide (Enfoque) | Subcategorías Clave | Palanca de Gestión / Solución |
| :---- | :---- | :---- | :---- |
| **1\. Factor Humano y Conducta** | El impacto de las acciones, errores o falta de conciencia de las personas. | • **Ingeniería Social:** Phishing, vishing, suplantación. • **Malas Prácticas:** Contraseñas débiles, reutilizadas o compartidas. • **Exposición de Datos:** Fuga por error humano (destinatarios incorrectos, pérdida de equipos). • **Desviación de Procesos:** Uso de herramientas no autorizadas (Shadow IT/BYOD). | • Concientización y capacitación. • Campañas de simulación. • Políticas de uso aceptable. |
| **2\. Resiliencia Tecnológica** | La efectividad de los controles automatizados y el estado de la infraestructura. | • **Vulnerabilidades:** Explotación de fallas de software/hardware sin parchear. • **Defensas Perimetrales:** Fallas o bypass en firewalls, pasarelas de correo o IDS/IPS. • **Compromiso de Endpoints:** Infecciones de malware o ransomware en equipos. • **Cloud / Aplicaciones:** Malas configuraciones en la nube o fallas en código. | • Gestión de parches (Patch Management). • Endurecimiento (Hardening) de sistemas. • Actualización de herramientas de detección (EDR/XDR). |
| **3\. Procesos y Operación** | La madurez de los procedimientos internos, la detección y la respuesta. | • **Gestión de Cambios:** Incidentes derivados de errores en actualizaciones o despliegues. • **Tiempos de Respuesta:** Demoras en la detección (MTTD) y contención (MTTR). • **Respaldo y Recuperación:** Fallas en la restauración de datos o respaldos vulnerados. | • Optimización del SOC / Monitoreo. • Pruebas periódicas de continuidad y *backups* inmutables. • Mejora del proceso de cambios. |
| **4\. Ecosistema de Terceros** | El riesgo heredado de proveedores, socios y la cadena de suministro. | • **Cadena de Suministro:** Ataques originados en proveedores de software o servicios. • **Incumplimiento Normativo:** Proveedores que no cumplen los estándares de seguridad acordados. • **Accesos de Terceros:** Cuentas de proveedores mal gestionadas o con privilegios excesivos. | • Debida diligencia y auditoría a proveedores. • Gestión estricta de accesos privilegiados (PAM) para terceros. • Cláusulas contractuales de ciberseguridad (SLA). |

### **Fórmula para la Presentación Ejecutiva**

Al unificar estas cuatro dimensiones en un reporte o *dashboard*, podrás responder de inmediato a la gerencia con una estructura clara:

* **¿Dónde nos duele más?** (Comparativa porcentual entre Humano, Tecnología, Procesos y Terceros).  
* **¿Qué acción debemos tomar?** (Invertir en capacitación, automatizar parches, revisar contratos de proveedores o ajustar procesos operativos).

## **PARTE 4: CONSEJOS PRÁCTICOS, ERRORES COMUNES Y RIESGOS TECNOLÓGICOS ASOCIADOS**

### **1\. Identidad, Autenticación y Gestión de Claves**

#### **❌ Errores Comunes**

* **Homologación de credenciales:** Reutilizar la contraseña del correo institucional o del sistema del hospital para ClaveÚnica, banca en línea o e-commerce.  
* **Préstamo de accesos por carga operativa:** Entregar el usuario y clave corporativa a terceros para la agilización de tareas administrativas o de registro.  
* **Aprobación ciega de MFA:** Aprobar notificaciones de autenticación push en el teléfono personal sin estar realizando un inicio de sesión activo en ese instante.

#### **✅ Buenas Prácticas y Razones de Riesgo (Normativa OIV / MINSAL)**

1. **Emplear gestores de contraseñas autorizados para crear y almacenar cadenas complejas (mínimo 12 caracteres, mezclando mayúsculas, minúsculas, números y símbolos).**  
   * 🛑 *Riesgo / Por qué importa:* Las contraseñas simples o reutilizadas son descifradas en segundos por ataques de fuerza bruta automatizados o filtradas en bases de datos comprometidas de otros sitios web.  
2. **Mantener separadas las credenciales del ámbito privado (ClaveÚnica, bancos) de la identidad digital corporativa.**  
   * 🛑 *Riesgo / Por qué importa:* Si un servicio comercial externo sufre un ciberataque y filtra su base de datos, los atacantes probarán esa misma combinación de correo y clave (ataque de *Credential Stuffing*) para vulnerar de inmediato el acceso a los sistemas del hospital.  
3. **Validar manualmente cada notificación de MFA en el teléfono y rechazar cualquier solicitud no gatillada por el usuario.**  
   * 🛑 *Riesgo / Por me importa:* Los atacantes utilizan técnicas de "MFA Fatigue" (bombardeo de notificaciones), enviando decenas de solicitudes consecutivas para que el usuario, por cansancio o confusión, presione "Aprobar", concediéndoles acceso directo a la red interna.  
4. **Tratar las credenciales institucionales como una firma legal estricta nominativa e intransferible.**  
   * 🛑 *Riesgo / Por qué importa:* Si un tercero comete un delito, borra registros o altera configuraciones desde una sesión abierta bajo su cuenta, las bitácoras de auditoría (*logs*) lo señalarán a usted como el autor legal y responsable directo de la acción.

### **2\. Correo Electrónico, Phishing y Reputación Web**

#### **❌ Errores Comunes**

* **Validación por nombre visible:** Confiar en mensajes únicamente porque el remitente muestra una denominación oficial, sin revisar la dirección de correo real.  
* **Reacción ante ganchos de urgencia:** Interactuar con correos que amenazan con *"cierre de cuenta inmediato"*, *"notificaciones judiciales"* o *"comprobantes de transferencia/facturas pendientes"*.  
* **Uso del correo corporativo en registros externos:** Registrar la dirección de correo @redsalud.gob.cl o del hospital en comercios electrónicos, promociones o redes sociales personales.

#### **✅ Buenas Prácticas y Razones de Riesgo (Normativa OIV / MINSAL)**

1. **Verificar la dirección real del remitente e inspeccionar hipervínculos (Hover Check) asegurando que apunten a dominios oficiales** .gob.cl **o** .cl**.**  
   * 🛑 *Riesgo / Por qué importa:* El 90% de las infecciones por *Ransomware* en instituciones públicas se inician con un correo de *Phishing*. Un solo clic en un enlace falso puede descargar un script (*dropper*) que cifre los servidores de la institución.  
2. **Ignorar y reportar mensajes que generen presión psicológica de urgencia o amenazas de bloqueo.**  
   * 🛑 *Riesgo / Por qué importa:* La ingeniería social busca anular el pensamiento crítico a través del pánico. Ninguna plataforma técnica ni entidad del Estado solicita actualización de credenciales o claves mediante enlaces urgentes adjuntos en un correo.  
3. **Utilizar el botón corporativo de reporte de phishing o notificar al CISO ante cualquier mensaje sospechoso.**  
   * 🛑 *Riesgo / Por qué importa:* Un correo malicioso enviado a su casilla probablemente llegó a cientos de funcionarios más. El reporte temprano permite al equipo de TI bloquear el dominio a nivel perimetral antes de que otro usuario caiga en la trampa.  
4. **No utilizar el correo institucional para compras en línea, promociones o suscripciones personales.**  
   * 🛑 *Riesgo / Por qué importa:* Expone el dominio corporativo a listas masivas de spam y ataques de *Spear Phishing* dirigidos, aumentando la superficie de riesgo del hospital ante ciberdelincuentes.

### **3\. Redes Sociales, Privacidad y Superficie de Ataque**

#### **❌ Errores Comunes**

* **Exposición visual del Puesto de Trabajo:** Publicar fotografías o videos en redes sociales (Instagram, LinkedIn, TikTok) donde se aprecien pantallas con datos del sistema corporativo, nombres o identificadores.  
* **Comentarios sobre infraestructura tecnológica:** Revelar en foros públicos la marca del antivirus, versión de sistemas operativos o arquitectura de red del hospital.  
* **Uso de mensajería no controlada:** Crear grupos informales en aplicaciones de mensajería comercial para enviar documentación institucional reservada.

#### **✅ Buenas Prácticas y Razones de Riesgo (Normativa OIV / MINSAL)**

1. **Mantener una política estricta de "Escritorio y Pantalla Limpia" y no tomar fotografías ni videos en áreas de trabajo con pantallas encendidas.**  
   * 🛑 *Riesgo / Por qué importa:* La publicación no intencionada de pantallas permite a los ciberdelincuentes aplicar *OSINT* (Inteligencia de Fuentes Abiertas) para obtener nombres de software interno, versiones, RUTs de usuarios o datos confidenciales, facilitando ataques de suplantación.  
2. **Bloquear la sesión del computador (**Win \+ L**) cada vez que se abandone la estación de trabajo, incluso por pocos segundos.**  
   * 🛑 *Riesgo / Por qué importa:* Un equipo desatendido permite la intrusión física (*Physical Social Engineering*), la instalación de *Keyloggers* físicos por USB o el uso no autorizado del sistema por parte de cualquier visitante o transeúnte.  
3. **No divulgar en redes sociales ni foros detalles sobre los sistemas operativos, soluciones de seguridad o proveedores tecnológicos del hospital.**  
   * 🛑 *Riesgo / Por qué importa:* Proporciona a los atacantes el mapa exacto de la infraestructura del hospital, permitiéndoles buscar vulnerabilidades específicas (*CVEs*) para sobrepasar las defensas institucionales.  
4. **Transmitir archivos corporativos e información reservada únicamente por repositorios oficiales, prohibiendo el uso de WhatsApp o nubes personales.**  
   * 🛑 *Riesgo / Por qué importa:* Las aplicaciones de mensajería privada almacenan datos en servidores externos y dispositivos personales no gestionados por la institución, lo que genera fugas de datos involuntarias y brechas no controladas.

### **4\. Dispositivos, Almacenamiento y Conexiones**

#### **❌ Errores Comunes**

* **Uso de medios extraíbles no autorizados:** Conectar unidades flash USB o discos externos personales en computadores de la red corporativa.  
* **Uso de redes no seguras:** Trabajar fuera de la institución utilizando redes Wi-Fi públicas o abiertas sin activar la VPN corporativa.  
* **Alteración de agentes de seguridad:** Desactivar o modificar la configuración del antivirus/EDR en el equipo local.

#### **✅ Buenas Prácticas y Razones de Riesgo (Normativa OIV / MINSAL)**

1. **Prohibir estrictamente el uso de pendrives o discos externos personales en los equipos del hospital.**  
   * 🛑 *Riesgo / Por qué importa:* Las unidades USB son el vector primario de transmisión de *malware* que se ejecuta de forma silenciosa (*USB AutoRun*) al momento de la conexión, infectando la red local de forma inmediata.  
2. **Conectarse a la red institucional desde ubicaciones remotas utilizando únicamente una VPN corporativa con cifrado y MFA.**  
   * 🛑 *Riesgo / Por qué importa:* Las redes Wi-Fi públicas (cafeterías, aeropuertos) permiten ataques de interceptación (*Man-in-the-Middle*), donde un atacante en la misma red Wi-Fi puede capturar el tráfico de datos, contraseñas y cookies de sesión.  
3. **Almacenar los archivos únicamente en los repositorios oficiales en la nube corporativa (OneDrive/SharePoint institucional) y evitar guardar copias únicas en el disco local** C:**.**  
   * 🛑 *Riesgo / Por qué importa:* Los discos locales no cuentan con respaldo centralizado ni inmutabilidad WORM. Si el equipo sufre una falla de hardware o es infectado por un *Ransomware*, los documentos locales se perderán de forma irreversible.  
4. **Mantener activos y sin modificaciones los agentes de ciberseguridad (Antivirus/EDR/MDR) instalados por el área de TI.**  
   * 🛑 *Riesgo / Por qué importa:* Desactivar estos agentes deja al equipo sin protección en tiempo real, impidiendo que el Centro de Operaciones de Seguridad (*SOC*) detecte ejecuciones de código malicioso o comportamientos anómalos.  
5. 

**Parte 5\. Un paso a paso de como se activa un ramsonware**

### **Fase 1: El Ingreso (Factor Humano y Conducta)**

* **El evento:** Un usuario recibe un correo altamente personalizado (generado mediante ingeniería social o IA) simulando ser un proveedor de servicios conocido por el hospital.  
* **La falla de conducta:** El usuario confía en la apariencia legítima del correo y hace click en un enlace malicioso o descarga un archivo comprimido adjunto, omitiendo verificar el canal oficial.

### **Fase 2: El Acceso Inicial y Ejecución (Resiliencia Tecnológica)**

* **El evento:** Al abrir el archivo, se ejecuta un script silencioso (*payload*) en la estación de trabajo (*endpoint*) del usuario.  
* **La falla tecnológica:**  
  * El antivirus tradicional o la solución de correo perimetral no logran detectar la amenaza en tiempo cero.  
  * La estación de trabajo contaba con una vulnerabilidad de software sin parchar (*patch management* deficiente), lo que permite al script elevar privilegios locales rápidamente sin ser bloqueado.

### **Fase 3: Movimiento Lateral y Persistencia (Procesos y Operación)**

* **El evento:** Una vez dentro del primer equipo, el atacante recopila credenciales y comienza a moverse a través de la red interna de la organización hacia servidores críticos.  
* **La falla de procesos y controles:**  
  * Los sistemas de monitoreo (SOC) demoran horas o días en detectar el comportamiento anómalo (alto MTTD \- Mean Time to Detect).  
  * La red interna carecía de una correcta segmentación, permitiendo que una máquina de usuario común se conecte libremente a servidores de bases de datos o controladores de dominio.  
  * Se abusan de cuentas de servicios mal gestionadas o credenciales débiles que el atacante recolectó de la memoria RAM.

### **Fase 4: Evasión de Respaldos (Procesos y Ecosistema de Terceros)**

* **El evento:** Antes de detonar el cifrado, el atacante busca neutralizar la capacidad de recuperación de la empresa.  
* **La falla operativa:**  
  * Los respaldos (*backups*) de la compañía estaban conectados a la misma red y eran accesibles con las credenciales administrativas comprometidas. El atacante los elimina o los cifra primero.  
  * En algunos casos, si se usa un proveedor externo de *backup* en la nube, el atacante explota una mala configuración de acceso o credenciales de API de dicho tercero.

### **Fase 5: El Efecto Final (Impacto Logrado por el Atacante)**

* **El evento:** Se despliega masivamente el *ransomware* en todos los servidores y equipos alcanzados, cifrando la información crítica y bloqueando la operación de la organizacion (hospital).  
* **El resultado operativo:**  
  * **Extorsión doble/triple:** El atacante no solo bloquea el acceso mediante el cifrado, sino que previamente exfiltró gigabytes de información confidencial para amenazar con filtrarla públicamente.  
  * **Paralización:** La organizacion queda inoperante, con imposibilidad de atendar de manera fluida a sus pacientes, se generan pérdidas económicas por hora, daño reputacional y la disyuntiva crítica de negociar el rescate o intentar reconstruir desde cero ante la ausencia de respaldos inmutables.

---

## **PARTE 6: CONCLUSIONES INSTITUCIONALES Y CONDUCTA RESILIENTE (SLIDE 14)**

### **📄 Diapositiva 14: El Factor Humano como la Barrera Más Efectiva de Protección**

* **Título:** El Factor Humano como la Barrera Más Efectiva de Protección  
* **Subtítulo:** Resiliencia Operacional: Superando la Brecha Tecnológica mediante Conductas Conscientes  
* **Texto de Lámina:**  
  * **La Brecha Tecnológica y sus Limitaciones:** Los recursos e infraestructura tecnológica en salud pública a menudo enfrentan restricciones presupuestarias y sistemas heredados. La tecnología es indispensable pero no 100% infalible.  
  * **El "Cortafuegos Humano":** La conducta del usuario es la línea de defensa más ágil y determinante para detener intrusiones antes de que afecten la red hospitalaria.  
  * **Tres Conductas Clave:**  
    1. *Criterio y Pausa Digital:* Verificar remitentes y dudar de correos urgentes (previene el 90% del Phishing).  
    2. *Reporte Oportuno ANCI:* Notificar eventos anómalos de inmediato para permitir la respuesta del SOC en la ventana legal de 3 horas.  
    3. *Higiene de Identidad:* Uso responsable de identidades nominativas con MFA, sin exponer contraseñas físicamente ni en redes sociales.  
* **Guion del Expositor:**  
* *"Para concluir nuestra presentación, debemos sintetizar una premisa fundamental: si bien reconocemos que los recursos tecnológicos e infraestructura en la salud pública no siempre son los ideales ni de última generación, existe un espacio de protección decisivo en la conducta de cada uno de nosotros. El factor humano no es solo una potencial vulnerabilidad; es el cortafuegos más efectivo del hospital. Cuando un funcionario se detiene a verificar un correo dudoso, reporta una anomalía dentro del plazo de 3 horas y cuida sus credenciales, compensa las limitaciones técnicas y garantiza la continuidad asistencial y la seguridad de nuestros pacientes."*

---

## **BONUS TRACK: INTELIGENCIA ARTIFICIAL 2026 (SLIDE 15)**

### **📄 Diapositiva 15: Bonus Track AI - Evolución y Aceleración de Modelos de IA (2023 vs. 2026)**

* **Título:** Evolución y Aceleración de Modelos de IA (2023 vs. 2026)  
* **Subtítulo:** Matriz Comparativa de Ciclos de Vida, Datos Sintéticos y Parches de Capacidades  
* **Tabla Comparativa de Análisis:**  
  * **Ciclo de vida del modelo insignia:** 12 - 18 meses (2023) ➔ **3 - 5 meses (2026)** | *Informes de la industria sobre iteraciones continuas y despliegues acelerados (ej. OpenAI o3/GPT-5, Anthropic Claude 3.5/5 y Google Gemini 2.5/3.6).*  
  * **Proporción de datos sintéticos en entrenamiento:** < 10% (2023) ➔ **45% - 60% (2026)** | *Investigación en Data Scaling Laws y arquitecturas como Microsoft Phi o DeepSeek con destilación.*  
  * **Dependencia de código auto-generado para reentrenamiento:** Baja < 20% (2023) ➔ **Alta > 50% (2026)** | *Reportes de adopción de pipelines de retroalimentación sintética (RLAIF y Distillation Pipelines como Distilabel).*  
  * **Frecuencia de parches de capacidades (Fine-tuning/RLHF):** Esporádica (2023) ➔ **Continua semanal/mensual vía API (2026)** | *Lanzamientos incrementales de APIs comerciales y despliegues de razonamiento en tiempo de inferencia.*  
* **Guion del Expositor:**  
* *"Como módulo complementario o Bonus Track, observamos la aceleración vertiginosa del ecosistema de Inteligencia Artificial entre 2023 y 2026. Los ciclos de desarrollo de modelos insignia se redujeron de más de un año a tan solo meses. La generación de datos sintéticos pasó de ser marginal a constituir más del 50% del volumen de entrenamiento, y la actualización de capacidades pasó de ser esporádica a un proceso continuo semanal vía API. Esta velocidad de transformación impacta directamente los vectores de amenaza y las herramientas de defensa digital."*



