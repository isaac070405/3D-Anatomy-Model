// Spanish (Español) interface text. With Spanish selected, this replaces English interface text with Spanish.
// Structure names stay English with the Spanish name beside them (names.js). Add or fix a line below: "English|Español".
// worksheet.txt in this folder is the list these lines came from.
(function () {
  const TEXT = `
1. Brain and spine views|1. Vistas del cerebro y la columna
2. Head: eye, ear, nose, mouth, skull|2. Cabeza: ojo, oído, nariz, boca, cráneo
3. Neck|3. Cuello
4. Thoracic and abdominal cavity|4. Cavidad torácica y abdominal
5. Upper limb|5. Miembro superior
6. Lower limb|6. Miembro inferior
Afferent|Aferente
All digestive|Todo el digestivo
Anatomical directions|Direcciones anatómicas
Anatomy by system, group and part|Anatomía por sistema, grupo y parte
Anatomy mode|Modo anatomía
Anatomy, exploded|Anatomía, desglosada
Anterior|Anterior
Anterior / Ventral|Anterior / Ventral
Anterior up · patient's right on the left|Anterior arriba · derecha del paciente a la izquierda
Anterior view|Vista anterior
Appendix|Apéndice
Artery|Arteria
Assemble anatomy|Ensamblar anatomía
Assembled|Ensamblado
Atlas|Atlas
Axial brain section|Corte axial del cerebro
Axial level|Nivel axial
Bladder and pelvis|Vejiga y pelvis
Body layers, skin to bone|Capas del cuerpo, de la piel al hueso
Body region|Región del cuerpo
Bone|Hueso
Brain and cord|Cerebro y médula
Brain axial|Cerebro axial
Brain axial series|Serie axial del cerebro
Breast (female)|Mama (femenina)
Breast from the side (female)|Mama de perfil (femenina)
Breast: glandular|Mama: glandular
Breast: supportive|Mama: sostén
Breast: surface|Mama: superficie
Breast: vessels, nerves, lymph|Mama: vasos, nervios, linfa
Bronchi|Bronquios
Bronchus|Bronquio
Browse by system|Explorar por sistema
Camera views|Vistas de cámara
Center selected structure|Centrar la estructura seleccionada
Cervical nodes|Ganglios cervicales
Chambers and valves|Cámaras y válvulas
Clear|Borrar
Clear pin|Quitar marcador
Click a colour to select it, drag to move, scroll to zoom|Haga clic en un color para seleccionarlo, arrastre para mover, desplace para ampliar
Click anatomy for names · choose a system below|Haga clic en la anatomía para ver los nombres · elija un sistema abajo
Close|Cerrar
Close brain axial series|Cerrar la serie axial del cerebro
Close cross-section|Cerrar el corte transversal
Close tweaks|Cerrar ajustes
Coronal|Coronal
Coronary arteries and veins|Arterias y venas coronarias
Cortex opacity|Opacidad de la corteza
Cross-section|Corte transversal
Cross-section colour map|Mapa de color del corte
Cut axis|Eje de corte
Cut depth|Profundidad de corte
Cut position|Posición de corte
Deep|Profundo
Deep neck muscles|Músculos profundos del cuello
Dissect|Disecar
Ear: all|Oído: todo
Ear: inner|Oído: interno
Ear: middle|Oído: medio
Ear: outer|Oído: externo
Efferent|Eferente
Eight great vessels|Los ocho grandes vasos
Enlarge|Ampliar
Enlarge cross-section|Ampliar el corte transversal
Epidermis, dermis and the fat layer beneath.|Epidermis, dermis y la capa de grasa subyacente.
Explode anatomy|Desglosar anatomía
Exploded view|Vista desglosada
Exploded view amount|Grado de desglose
Explore|Explorar
Fat|Grasa
Female|Femenino
Female reproductive system|Sistema reproductor femenino
Fibrous connective tissue (breast)|Tejido conectivo fibroso (mama)
Find a part|Buscar una parte
Fit|Ajustar
Frontal|Frontal
Head & neck|Cabeza y cuello
Heart cut depth|Profundidad de corte del corazón
Heart cutaway (open the chambers)|Corte del corazón (abrir las cámaras)
Hide selected structure|Ocultar la estructura seleccionada
Human anatomy|Anatomía humana
Inferior|Inferior
Inferior / Caudal|Inferior / Caudal
Inferior view|Vista inferior
Insula|Ínsula
Keys:|Teclas:
Kidney|Riñón
Kidney from behind|Riñón visto por detrás
Lateral|Lateral
Left|Izquierda
Left lateral view|Vista lateral izquierda
Limbic|Límbico
Liver, gallbladder, bile duct|Hígado, vesícula biliar, vía biliar
Lower extremity|Extremidad inferior
Lung|Pulmón
Lung opacity|Opacidad del pulmón
Lungs and diaphragm|Pulmones y diafragma
Lymph nodes|Ganglios linfáticos
Lymphatic system|Sistema linfático
Lymphatic vessels|Vasos linfáticos
MNI template T1, 1 mm slices|Plantilla MNI T1, cortes de 1 mm
MRI|RM
Male|Masculino
Medial|Medial
Menstrual cycle day|Día del ciclo menstrual
Menstrual cycle, day|Ciclo menstrual, día
Menstruation|Menstruación
Menu|Menú
Minimise|Minimizar
Minimise cross-section|Minimizar el corte transversal
Muscle|Músculo
Muscles|Músculos
Nasal cavity|Cavidad nasal
Nasopharynx|Nasofaringe
Neck muscles|Músculos del cuello
Neck: organs, vessels, nerves|Cuello: órganos, vasos, nervios
Nerve|Nervio
Nose and mouth|Nariz y boca
Notes on the model|Notas sobre el modelo
Nothing removed|Nada eliminado
Nothing selected|Nada seleccionado
Occipital|Occipital
Oesophagus|Esófago
Oral cavity with teeth|Cavidad oral con dientes
Organs|Órganos
Oropharynx|Orofaringe
Outermost visible: Skin|Capa visible más externa: Piel
Ovaries and uterus close-up (female)|Ovarios y útero en detalle (femenino)
Pancreas and pancreatic duct|Páncreas y conducto pancreático
Panels|Paneles
Parietal|Parietal
Peel body layers from skin to bone|Retirar las capas del cuerpo, de la piel al hueso
Peel layers|Retirar capas
Peel layers from skin to bone|Retirar capas, de la piel al hueso
Peyer's patches|Placas de Peyer
Plate (atlas)|Lámina (atlas)
Plate II · Systems of the body|Lámina II · Sistemas del cuerpo
Posterior|Posterior
Posterior / Dorsal|Posterior / Dorsal
Posterior view|Vista posterior
Presentation|Presentación
Put all back|Devolver todo
Renal|Renal
Rendering|Renderizado
Reproductive organs|Órganos reproductores
Reproductive pelvis from the side|Pelvis reproductora de perfil
Reset|Restablecer
Right|Derecha
Right lateral view|Vista lateral derecha
Sagittal|Sagital
Search|Buscar
Search a part|Buscar una parte
Selected|Seleccionado
Sex of the body|Sexo del cuerpo
Shoulder and arm|Hombro y brazo
Show Anterior organs|Mostrar órganos anteriores
Show Bones and cartilage|Mostrar huesos y cartílago
Show Capsules and ligaments|Mostrar cápsulas y ligamentos
Show Circulatory|Mostrar sistema circulatorio
Show Deep muscles|Mostrar músculos profundos
Show Deep nerves and vessels|Mostrar nervios y vasos profundos
Show Deep organs|Mostrar órganos profundos
Show Deepest muscles|Mostrar músculos más profundos
Show Digestive|Mostrar sistema digestivo
Show Eye and ear|Mostrar ojo y oído
Show Intermediate muscles|Mostrar músculos intermedios
Show Investing fascia|Mostrar fascia de revestimiento
Show Lymphatic|Mostrar sistema linfático
Show Muscular|Mostrar sistema muscular
Show Nervous|Mostrar sistema nervioso
Show Reproductive|Mostrar sistema reproductor
Show Reproductive (female and breast)|Mostrar sistema reproductor (femenino y mama)
Show Respiratory|Mostrar sistema respiratorio
Show Second muscle group|Mostrar segundo grupo muscular
Show Skeletal|Mostrar sistema esquelético
Show Skin|Mostrar piel
Show Subcutaneous fat|Mostrar grasa subcutánea
Show Superficial muscles|Mostrar músculos superficiales
Show Superficial veins|Mostrar venas superficiales
Show Thyroid and parathyroid|Mostrar tiroides y paratiroides
Show Urinary|Mostrar sistema urinario
Show Visceral coverings|Mostrar cubiertas viscerales
Show all|Mostrar todo
Show all layers|Mostrar todas las capas
Show cutting plane in the model|Mostrar el plano de corte en el modelo
Show direction arrows on the body|Mostrar flechas de dirección sobre el cuerpo
Show only this system|Mostrar solo este sistema
Show selected structure only|Mostrar solo la estructura seleccionada
Single alveolar unit|Unidad alveolar individual
Single tooth|Diente individual
Skin opacity|Opacidad de la piel
Skin tone|Tono de piel
Skin tone 1, darkest|Tono de piel 1, el más oscuro
Skin tone 2|Tono de piel 2
Skin tone 3|Tono de piel 3
Skin tone 4|Tono de piel 4
Skin tone 5|Tono de piel 5
Skin tone 6, lightest|Tono de piel 6, el más claro
Skull and teeth|Cráneo y dientes
Small intestine|Intestino delgado
Spine|Columna vertebral
Spread|Separar
Spread parts apart|Separar las partes
Superficial|Superficial
Superior|Superior
Superior / Cranial|Superior / Craneal
Superior view|Vista superior
Surface roughness|Rugosidad de la superficie
Surrounding anatomy|Anatomía circundante
Surrounding anatomy, filled to transparent|Anatomía circundante, rellena hasta transparente
Systems|Sistemas
Temporal|Temporal
The airway tubes|Las vías aéreas
Tonsils|Amígdalas
Tonsils and lymphatic system|Amígdalas y sistema linfático
Torso & pelvis|Tronco y pelvis
Transverse|Transversal
Turntable|Plato giratorio
Turntable hides the panels and slowly rotates the body.|El plato giratorio oculta los paneles y hace girar lentamente el cuerpo.
Tweaks|Ajustes
Undo|Deshacer
Upper extremity|Extremidad superior
Vein|Vena
Vulva (external)|Vulva (externa)
White background for snapshots|Fondo blanco para las capturas
Whole body|Cuerpo entero
X-ray|Rayos X
Zoom in|Acercar
Zoom out|Alejar
Zoom to a structure when clicked|Acercar a una estructura al hacer clic
a few positional or displacement errors|puede haber algunos errores de posición o desplazamiento
away from the midline.|alejándose de la línea media.
away from the surface.|alejándose de la superficie.
carried away from it, such as motor nerves.|conducidas desde él, como los nervios motores.
carried toward a centre, such as sensory nerves to the CNS.|conducidas hacia un centro, como los nervios sensitivos hacia el SNC.
farther from it.|más lejos de él.
may exist.|en el modelo.
nearer the limb's attachment.|más cerca de la inserción del miembro.
of 28:|de 28:
toward the back.|hacia la espalda.
toward the feet.|hacia los pies.
toward the front.|hacia el frente.
toward the head.|hacia la cabeza.
toward the midline.|hacia la línea media.
toward the surface.|hacia la superficie.
This model does not exactly reflect the real body arrangement;|Este modelo no refleja con exactitud la disposición real del cuerpo;
Veins in the subcutaneous fat: external jugular, facial, forearm veins.|Venas del tejido adiposo subcutáneo: yugular externa, facial, venas del antebrazo.
Atlas keeps the plate colours, X-ray shows every system through the others.|El atlas conserva los colores de la lámina; los rayos X muestran cada sistema a través de los demás.
Estrogen and progesterone are low, so the uterine lining sheds through the vagina.|El estrógeno y la progesterona están bajos, por lo que el revestimiento uterino se desprende a través de la vagina.
Skull, spine, ribs, limb bones, teeth, costal cartilage and airway cartilage rings.|Cráneo, columna, costillas, huesos de los miembros, dientes, cartílago costal y anillos cartilaginosos de las vías aéreas.
Muscles just under the fascia: trapezius, deltoid, pectoralis major, gluteus maximus.|Músculos justo bajo la fascia: trapecio, deltoides, pectoral mayor, glúteo mayor.
Click any structure to select it. Its tab can hide it, and Undo brings hidden structures back.|Haga clic en cualquier estructura para seleccionarla. Su pestaña puede ocultarla y Deshacer recupera las estructuras ocultas.
Deep fascia, aponeuroses, spermatic fasciae, Buck fascia, iliotibial tract, flexor retinaculum.|Fascia profunda, aponeurosis, fascias espermáticas, fascia de Buck, tracto iliotibial, retináculo flexor.
Brachialis, serratus anterior, infraspinatus, teres major, piriformis, vastus intermedius, semimembranosus.|Braquial, serrato anterior, infraespinoso, redondo mayor, piriforme, vasto intermedio, semimembranoso.
Cranial and spinal nerves, spinal cord, plexuses, great arteries, cerebral arteries, sinuses and deep veins.|Nervios craneales y espinales, médula espinal, plexos, grandes arterias, arterias cerebrales, senos y venas profundas.
Brain, mouth and pharynx, trachea and lungs, oesophagus, pancreas, spleen, bowel, kidneys, prostate, urethra.|Cerebro, boca y faringe, tráquea y pulmones, esófago, páncreas, bazo, intestino, riñones, próstata, uretra.
Cranial sutures, acromioclavicular joint, intervertebral discs, and skeletal, laryngeal and visceral ligaments.|Suturas craneales, articulación acromioclavicular, discos intervertebrales y ligamentos esqueléticos, laríngeos y viscerales.
Supraspinatus, subscapularis, gluteus minimus, adductor magnus, tibialis posterior, thenar muscles, puborectalis.|Supraespinoso, subescapular, glúteo menor, aductor mayor, tibial posterior, músculos tenares, puborrectal.
Dura mater, pericardium, pleura, omenta and mesenteries, serosae, renal and prostate capsules, testicular tunics.|Duramadre, pericardio, pleura, omentos y mesenterios, serosas, cápsulas renales y prostáticas, túnicas testiculares.
Heart chambers and valves, larynx, liver, gallbladder, stomach, transverse colon, caecum, bladder, testis, penis.|Cámaras y válvulas del corazón, laringe, hígado, vesícula biliar, estómago, colon transverso, ciego, vejiga, testículo, pene.
The body surface, shown as a translucent shell so the systems beneath stay visible. Adjust it with the opacity slider.|La superficie del cuerpo, mostrada como una cubierta translúcida para que se vean los sistemas inferiores. Se ajusta con el control de opacidad.
Triceps brachii, gluteus medius, vastus lateralis and medialis, adductor longus, soleus, flexor digitorum superficialis.|Tríceps braquial, glúteo medio, vastos lateral y medial, aductor largo, sóleo, flexor superficial de los dedos.
Diaphragm, supinator, pronator quadratus, sphincters, trachealis, detrusor, and the wall muscle of stomach and oesophagus.|Diafragma, supinador, pronador cuadrado, esfínteres, traqueal, detrusor y el músculo de la pared del estómago y del esófago.
Left and right are the figure's own. Drag to turn, scroll to zoom. Downloads include the systems currently shown, minus removed parts.|Izquierda y derecha son las de la propia figura. Arrastre para girar y desplace para ampliar. Las descargas incluyen los sistemas mostrados, sin las partes eliminadas.
Every structure moves away from the midline in proportion to its distance from it, and from front to back as well. Skin and fat stay in place.|Cada estructura se aleja de la línea media en proporción a su distancia de ella, y también de delante hacia atrás. La piel y la grasa permanecen en su sitio.
The reproductive panel supports male and female anatomy. Use the Sex control to switch model variants and view the available reproductive structures.|El panel reproductor admite anatomía masculina y femenina. Use el control de Sexo para cambiar de variante del modelo y ver las estructuras reproductoras disponibles.
The female body mesh is not loaded, so the generic body surface is shown with the female reproductive and breast structures. Peel the skin layer to see them.|No se ha cargado la malla del cuerpo femenino, por lo que se muestra la superficie corporal genérica con las estructuras reproductoras y mamarias femeninas. Retire la capa de piel para verlas.
Supports the body, protects organs and anchors muscle. Bone is shown in ivory and cartilage (discs, costal cartilage, joint surfaces) in blue-grey. Hover any bone to name it.|Sostiene el cuerpo, protege los órganos y ancla los músculos. El hueso se muestra en marfil y el cartílago (discos, cartílago costal, superficies articulares) en gris azulado. Pase el cursor sobre un hueso para ver su nombre.
Space resets the view, H hides the selected part, U undoes, X toggles X-ray, 1 2 3 set the cut to transverse, coronal or sagittal. Double-click a surface to leave a note on it.|La barra espaciadora restablece la vista, H oculta la parte seleccionada, U deshace, X activa los rayos X, 1 2 3 fijan el corte en transversal, coronal o sagital. Haga doble clic en una superficie para dejar una nota.
A simplified model in anatomical position. Search for a part, peel the layers from skin to bone, explode the body into systems, click a structure to isolate it, and cut through the body with the slice view.|Un modelo simplificado en posición anatómica. Busque una parte, retire las capas de la piel al hueso, desglose el cuerpo en sistemas, haga clic en una estructura para aislarla y corte el cuerpo con la vista de corte.
Skeletal muscle produces movement and holds posture, attaching to bone through tendons (white) and aponeuroses. Superficial muscles are the lighter red, deeper layers darker. The arm, forearm, hand, hip, thigh and leg follow anatomical atlas plates.|El músculo esquelético produce movimiento y mantiene la postura, y se une al hueso mediante tendones (blancos) y aponeurosis. Los músculos superficiales son de un rojo más claro y las capas profundas más oscuras. El brazo, antebrazo, mano, cadera, muslo y pierna siguen láminas de atlas anatómico.
The hypodermis: fat and loose connective tissue between the dermis and the deep fascia over muscle. Its depth is set by region, from about 1 mm over the front of the shin and the scalp to 3 cm over the abdomen, buttocks and thighs, with more over the hips, thighs and breasts in the female body. The skin above it is about 2.5 mm thick, up to 6 mm on the back.|La hipodermis: grasa y tejido conectivo laxo entre la dermis y la fascia profunda sobre el músculo. Su grosor depende de la región, desde unos 1 mm sobre la cara anterior de la espinilla y el cuero cabelludo hasta 3 cm sobre el abdomen, los glúteos y los muslos, con más grosor sobre las caderas, los muslos y las mamas en el cuerpo femenino. La piel que la cubre mide unos 2,5 mm de grosor, hasta 6 mm en la espalda.
The thyroid gland wraps the front of the trachea below the larynx: two lobes joined by an isthmus over the second to fourth tracheal rings, often with a pyramidal lobe rising toward the hyoid. Four parathyroid glands sit on the back of the lobes. Blood comes from the superior thyroid artery (external carotid) and the inferior thyroid artery (thyrocervical trunk).|La glándula tiroides rodea la cara anterior de la tráquea, bajo la laringe: dos lóbulos unidos por un istmo sobre los anillos traqueales segundo a cuarto, a menudo con un lóbulo piramidal que asciende hacia el hioides. Cuatro glándulas paratiroides se sitúan en la cara posterior de los lóbulos. La sangre llega por la arteria tiroidea superior (carótida externa) y la arteria tiroidea inferior (tronco tirocervical).
Senses, integrates and responds. The central nervous system is the brain and spinal cord; cranial and spinal nerves form the peripheral system. The cerebral cortex is coloured by lobe: frontal (green), parietal (yellow), temporal (blue), occipital (pink), limbic (tan) and insula (purple). Use the view buttons for lateral, medial and inferior views of the brain, or the whole spine.|Percibe, integra y responde. El sistema nervioso central es el encéfalo y la médula espinal; los nervios craneales y espinales forman el sistema periférico. La corteza cerebral se colorea por lóbulos: frontal (verde), parietal (amarillo), temporal (azul), occipital (rosa), límbico (beige) e ínsula (morado). Use los botones de vista para ver el encéfalo desde los lados, medial e inferior, o la columna completa.
The heart pumps blood through a closed circuit. Deoxygenated blood (blue) returns through the venae cavae to the right heart and goes to the lungs through the pulmonary trunk (purple). Oxygenated blood (red) returns through the pulmonary veins to the left heart and leaves through the aorta. Use Heart cutaway to open the four chambers and see the valves, chordae and papillary muscles.|El corazón bombea la sangre por un circuito cerrado. La sangre desoxigenada (azul) vuelve por las venas cavas al corazón derecho y va a los pulmones por el tronco pulmonar (morado). La sangre oxigenada (roja) vuelve por las venas pulmonares al corazón izquierdo y sale por la aorta. Use Corte del corazón para abrir las cuatro cámaras y ver las válvulas, las cuerdas tendinosas y los músculos papilares.
Air passes the larynx, the trachea (C-shaped cartilage rings with a muscular back wall) and the bronchial tree to the alveoli, where gas exchange happens across the thin alveolar wall into the capillaries. The right lung has three lobes and the left two, with a cardiac notch. The diaphragm drives breathing, and a magnified alveolar unit can be shown beside the figure (Heart, lungs and diaphragm panel).|El aire pasa por la laringe, la tráquea (anillos cartilaginosos en C con pared posterior muscular) y el árbol bronquial hasta los alvéolos, donde el intercambio de gases ocurre a través de la delgada pared alveolar hacia los capilares. El pulmón derecho tiene tres lóbulos y el izquierdo dos, con una escotadura cardíaca. El diafragma impulsa la respiración y se puede mostrar una unidad alveolar ampliada junto a la figura (panel de corazón, pulmones y diafragma).
The eyeball sits in the orbit, moved by four recti and two obliques that arise around the optic canal; the levator palpebrae superioris lifts the upper lid and the lacrimal gland lies above and lateral. The ear runs from the auricle and external acoustic meatus to the tympanic membrane, the three ossicles in the tympanic cavity, and the cochlea and semicircular canals in the petrous temporal bone. The pharyngotympanic tube links the middle ear to the nasopharynx.|El globo ocular se sitúa en la órbita y lo mueven cuatro rectos y dos oblicuos que nacen alrededor del conducto óptico; el elevador del párpado superior levanta el párpado y la glándula lagrimal queda arriba y lateral. El oído va del pabellón auricular y el meato acústico externo a la membrana timpánica, los tres huesecillos de la cavidad timpánica, y la cóclea y los conductos semicirculares en la porción petrosa del temporal. La trompa faringotimpánica comunica el oído medio con la nasofaringe.
Female reproductive organs include the ovaries, fallopian tubes, uterus, cervix and vagina, with the vulva externally. Move the menstrual cycle slider (day 1 to 28) to see the lining thicken, a follicle mature, ovulation and the corpus luteum. The breast model has 16 radial lobes, each with a lactiferous duct, a lobule and acini, set in fat and fibrous tissue held by the suspensory ligaments of Cooper, with the nipple-areola complex, axillary tail, lymph nodes, vessels and nerves.|Los órganos reproductores femeninos incluyen los ovarios, las trompas uterinas, el útero, el cuello uterino y la vagina, con la vulva en el exterior. Mueva el control del ciclo menstrual (día 1 a 28) para ver cómo se engrosa el revestimiento, madura un folículo, ocurre la ovulación y se forma el cuerpo lúteo. El modelo de mama tiene 16 lóbulos radiales, cada uno con un conducto galactóforo, un lobulillo y ácinos, inmersos en grasa y tejido fibroso sujeto por los ligamentos suspensorios de Cooper, con el complejo pezón-areola, la cola axilar, ganglios linfáticos, vasos y nervios.
Lymph drains the fluid that leaks from capillaries back to the blood. Lymph nodes (lime) filter it along collecting vessels (pale green) that join into trunks: the jugular, subclavian and bronchomediastinal trunks on each side, and the lumbar and intestinal trunks below. The right lymphatic duct drains the right head, neck, arm and chest into the right venous angle. The thoracic duct, which starts at the cisterna chyli, drains everything else into the left venous angle. The tonsils, spleen, thymus, Peyer's patches and appendix are lymphoid tissue held in other systems and shown together in the lymphatic views.|La linfa devuelve a la sangre el líquido que sale de los capilares. Los ganglios linfáticos (lima) la filtran a lo largo de vasos colectores (verde claro) que se unen en troncos: yugular, subclavio y broncomediastínico a cada lado, y lumbar e intestinal abajo. El conducto linfático derecho drena la cabeza, el cuello, el brazo y el tórax derechos hacia el ángulo venoso derecho. El conducto torácico, que nace en la cisterna del quilo, drena todo lo demás hacia el ángulo venoso izquierdo. Las amígdalas, el bazo, el timo, las placas de Peyer y el apéndice son tejido linfoide de otros sistemas y se muestran juntos en las vistas linfáticas.
The kidneys filter blood and form urine, which drains from the renal papillae into the minor and major calyces and the renal pelvis, then down the ureters to the bladder. The renal cortex is shown translucent so the medullary pyramids and collecting system are visible inside. At the hilum the renal vein lies in front, the artery in the middle and the pelvis behind. Each ureter narrows at the pelviureteric junction, at the pelvic brim and where it passes obliquely through the bladder wall. The trigone, between the two ureteric orifices and the internal urethral orifice, is the smooth area of the otherwise folded bladder lining.|Los riñones filtran la sangre y forman la orina, que pasa de las papilas renales a los cálices menores y mayores y a la pelvis renal, y luego baja por los uréteres hasta la vejiga. La corteza renal se muestra translúcida para ver dentro las pirámides medulares y el sistema colector. En el hilio, la vena renal queda delante, la arteria en medio y la pelvis detrás. Cada uréter se estrecha en la unión pieloureteral, en el borde de la pelvis y donde atraviesa oblicuamente la pared de la vejiga. El trígono, entre los dos orificios ureterales y el orificio uretral interno, es la zona lisa del revestimiento vesical, que por lo demás tiene pliegues.
Breaks down food, absorbs nutrients and water, and eliminates waste. The mouth holds 32 permanent teeth and a tongue with papillae in front of the V-shaped sulcus terminalis and the lingual tonsil behind it. The lips and cheeks line a vestibule outside the teeth, the hard and soft palate roof the mouth, and a palatine tonsil lies in each tonsillar fossa between the faucial arches, with the pharyngeal, tubal and lingual tonsils completing Waldeyer's ring. The parotid, submandibular and sublingual glands empty into the mouth through their ducts. The oesophagus narrows at four points and changes from striated to smooth muscle down its length. The J-shaped stomach has a fundus above the cardia, an angular incisure on the lesser curvature and a thick-walled pyloric canal; its translucent wall shows three muscle layers over red, folded mucosa. The duodenum curves around the pancreatic head. The jejunum (upper left, wider, redder, tall folds, long vasa recta) gives way to the ileum (lower right, narrower, fatty mesentery, Peyer’s patches). The colon carries haustra, three taeniae and fatty appendices; the rectum follows the sacrum and bends at the puborectalis sling into the anal canal.|Descompone los alimentos, absorbe nutrientes y agua y elimina los desechos. La boca tiene 32 dientes permanentes y una lengua con papilas delante del surco terminal en V y de la amígdala lingual detrás. Los labios y las mejillas forman un vestíbulo fuera de los dientes, el paladar duro y el blando forman el techo de la boca, y una amígdala palatina se aloja en cada fosa amigdalina entre los arcos de las fauces; las amígdalas faríngea, tubárica y lingual completan el anillo de Waldeyer. Las glándulas parótida, submandibular y sublingual vierten en la boca por sus conductos. El esófago se estrecha en cuatro puntos y cambia de músculo estriado a liso a lo largo de su recorrido. El estómago, en forma de J, tiene un fundus sobre el cardias, una incisura angular en la curvatura menor y un canal pilórico de pared gruesa; su pared translúcida muestra tres capas musculares sobre una mucosa roja y plegada. El duodeno rodea la cabeza del páncreas. El yeyuno (arriba a la izquierda, más ancho, más rojo, con pliegues altos y vasos rectos largos) da paso al íleon (abajo a la derecha, más estrecho, con mesenterio graso y placas de Peyer). El colon tiene haustras, tres tenias y apéndices grasos; el recto sigue el sacro y se curva en el cabestrillo del puborrectal hacia el conducto anal.
Appendix and caecum|Apéndice y ciego
Bronchial tree|Árbol bronquial
Cervical lymph nodes|Ganglios linfáticos cervicales
Cisterna chyli and thoracic duct|Cisterna del quilo y conducto torácico
Deep neck: scalenes and prevertebral muscles|Cuello profundo: escalenos y músculos prevertebrales
Digestive system|Sistema digestivo
Eye (right)|Ojo (derecho)
Great vessels|Grandes vasos
Heart: chambers and valves (cut open)|Corazón: cámaras y válvulas (abierto)
Inner ear (right)|Oído interno (derecho)
Large intestine|Intestino grueso
Larynx (muscles and nerves omitted)|Laringe (sin músculos ni nervios)
Liver, gallbladder and bile ducts|Hígado, vesícula biliar y vías biliares
Main bronchi|Bronquios principales
Middle ear (right)|Oído medio (derecho)
Nasal cavity (right half, septum omitted)|Cavidad nasal (mitad derecha, sin tabique)
Nasopharynx (right half)|Nasofaringe (mitad derecha)
Neck: organs, vessels and nerves|Cuello: órganos, vasos y nervios
Oral cavity (right half)|Cavidad oral (mitad derecha)
Oral cavity with teeth (right half)|Cavidad oral con dientes (mitad derecha)
Oropharynx (right half)|Orofaringe (mitad derecha)
Outer ear (right)|Oído externo (derecho)
Pancreas and pancreatic ducts|Páncreas y conductos pancreáticos
Pharynx (right half): nasopharynx, oropharynx, laryngopharynx|Faringe (mitad derecha): nasofaringe, orofaringe, laringofaringe
Salivary glands and ducts|Glándulas salivales y conductos
Single tooth (magnified, cut lengthwise)|Diente individual (ampliado, corte longitudinal)
Stomach|Estómago
Teeth|Dientes
Thyroid and parathyroid glands|Glándulas tiroides y paratiroides
Trachea|Tráquea
Whole ear (right)|Oído completo (derecho)
Follicular phase|Fase folicular
Ovulation|Ovulación
Luteal phase|Fase lútea
FSH matures a follicle that secretes estrogen, and the uterine lining thickens.|La FSH madura un folículo que secreta estrógeno, y el revestimiento uterino se engrosa.
A surge in luteinizing hormone (LH) releases the mature egg into the fallopian tube.|Un pico de hormona luteinizante (LH) libera el óvulo maduro hacia la trompa uterina.
The corpus luteum secretes progesterone. If fertilization does not happen, the lining sheds at the end of the cycle.|El cuerpo lúteo secreta progesterona. Si no hay fecundación, el revestimiento se desprende al final del ciclo.
Female body surface is shown with dedicated female reproductive and breast structures.|Se muestra la superficie del cuerpo femenino con estructuras reproductoras y mamarias femeninas específicas.
Snapshot PNG|Captura PNG
Save this view as a high-resolution PNG|Guardar esta vista como PNG de alta resolución
Expand|Expandir
Expand cross-section|Expandir el corte transversal
Make smaller|Reducir
Camera reset to the opening view|Cámara restablecida a la vista inicial
Nothing selected to hide|No hay nada seleccionado que ocultar
Nothing to undo|No hay nada que deshacer
Search a part, e.g. femur|Buscar una parte, p. ej. femur
Parts|Partes
All layers hidden|Todas las capas ocultas
Accessibility|Accesibilidad
Changelog|Registro de cambios
Cite|Citar
Code of conduct|Código de conducta
Contributing|Contribuir
Licence|Licencia
Security|Seguridad
Support|Soporte
Third-party notices|Avisos de terceros
Drag to orbit · scroll to zoom · right-drag to pan|Arrastre para orbitar · desplace para ampliar · arrastre con el botón derecho para desplazar
Download OBJ + MTL|Descargar OBJ + MTL
Download GLB|Descargar GLB
Body|Cuerpo
Bones|Huesos
Nerves|Nervios
Brain & nerves|Cerebro y nervios
Arteries|Arterias
Veins|Venas
Organs & airway|Órganos y vías aéreas
Lymphatics|Linfáticos
Project documents|Documentos del proyecto
No match. Try a common name, a Latin name or fewer letters.|Sin resultados. Pruebe un nombre común, un nombre latino o menos letras.
Showing: single alveolar unit (magnified). Press the button again or Reset to leave it.|Mostrando: unidad alveolar individual (ampliada). Pulse el botón de nuevo o Restablecer para salir.
close match|coincidencia aproximada
Type a note|Escriba una nota
Note|Nota
Delete note|Eliminar nota
Anatomy, assembled|Anatomía, ensamblada
← All systems|← Todos los sistemas
Snapshot saved|Captura guardada
No match|Sin resultados
Not available in Explode anatomy mode.|No disponible en el modo de anatomía desglosada.
Special senses|Sentidos especiales
Endocrine|Endocrino
three.js failed to load.|No se pudo cargar three.js.
`;
  const map = new Map();
  TEXT.split('\n').forEach(l => { const i = l.indexOf('|'); if (i > 0) map.set(l.slice(0, i).trim(), l.slice(i + 1).trim()); });
  const Z = () => window.__zh;
  const name = s => { const z = Z() && Z().zh(s); return z || map.get(s) || s; };
  // text built by code, with numbers or names inside
  const RULES = [
    [/^Showing (.+)$/, (m) => 'Mostrando: ' + name(m[1])],
    [/^([+−-]\d+) mm from mid-brain · level ([\d.]+) m$/, (m) => m[1] + ' mm desde la mitad del cerebro · nivel ' + m[2] + ' m'],
    [/^(.+) ↗$/, (m) => name(m[1]) + ' ↗'],
    [/^Parts · (\d+)$/, (m) => 'Partes · ' + m[1]],
    [/^(\d+) removed · last: (.+)$/, (m) => m[1] + ' eliminadas · última: ' + name(m[2])],
    [/^Outermost visible: (.+)$/, (m) => 'Capa visible más externa: ' + name(m[1])],
    [/^Showing: (.+)\. Choose Reset to bring everything back\.$/, (m) => 'Mostrando: ' + name(m[1]) + '. Elija Restablecer para recuperar todo.'],
    [/^(.+): no structures found for this view\.$/, (m) => name(m[1]) + ': no se encontraron estructuras en esta vista.'],
    [/^(.+) has no structures in this model yet$/, (m) => name(m[1]) + ' aún no tiene estructuras en este modelo'],
    [/^Undone\. (.+)$/, (m) => 'Deshecho. ' + tr(m[1])],
    [/^Cross-section axis: (.+)$/, (m) => 'Eje del corte transversal: ' + tr(m[1])],
    [/^Show (.+)$/, (m) => 'Mostrar ' + name(m[1]).charAt(0).toLowerCase() + name(m[1]).slice(1)],
    [/^(.+) system$/, (m) => { const z = name(m[1]); return /^sistema/i.test(z) ? z : 'Sistema ' + z.charAt(0).toLowerCase() + z.slice(1); }],
    [/^Skin tone (\d+)$/, (m) => 'Tono de piel ' + m[1]],
    [/^([^·]+) · (.+)$/, (m) => { const a = tr(m[1]), b = tr(m[2]); return (a || b) ? (a || m[1].trim()) + ' · ' + (b || m[2].trim()) : null; }],
  ];
  function tr(s) {
    const t = s.trim(); if (!t) return null;
    if (map.has(t)) return map.get(t);
    for (const [re, f] of RULES) { const m = t.match(re); if (m) return f(m); }
    return (Z() && Z().zh(t)) || null;
  }
  const orig = new WeakMap();      // node or element+attribute -> original English
  const ATTRS = ['placeholder', 'title', 'aria-label'];
  const on = () => document.body.classList.contains('zh-on');
  const nextEl = x => { let y = x.nextSibling; while (y && y.nodeType === 3 && !y.data.trim()) y = y.nextSibling; return y; };
  const tagged = y => !!(y && y.nodeType === 1 && y.classList && y.classList.contains('zh'));
  const skip = n => {
    const p = n.parentElement; if (!p) return true;
    if (/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.tagName)) return true;
    if (p.closest('[data-zh]')) return true;          // the Chinese name is drawn by CSS beside it
    return tagged(nextEl(n)) || tagged(nextEl(p));     // zh-hant.js already put the Chinese name next to it
  };
  function text(n) {
    if (skip(n)) return;
    const cur = n.data, lead = cur.match(/^\s*/)[0], trail = cur.match(/\s*$/)[0];
    const o = orig.get(n);
    if (o && o.zh === cur) return;               // already translated by us
    const z = tr(cur); if (!z) return;
    orig.set(n, { en: cur, zh: lead + z + trail }); n.data = lead + z + trail;
  }
  function attrs(el) {
    for (const a of ATTRS) {
      const v = el.getAttribute && el.getAttribute(a); if (!v) continue;
      const key = el, rec = (orig.get(key) || {})[a];
      if (rec && rec.zh === v) continue;
      const z = tr(v); if (!z) continue;
      const all = orig.get(key) || {}; all[a] = { en: v, zh: z }; orig.set(key, all); el.setAttribute(a, z);
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { text(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 11) return;
    if (root.nodeType === 1) attrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { if (n.nodeType === 3) text(n); else attrs(n); }
  }
  function restore(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) {
      if (n.nodeType === 3) { const o = orig.get(n); if (o && n.data === o.zh) n.data = o.en; orig.delete(n); }
      else { const all = orig.get(n); if (all) { for (const a in all) if (n.getAttribute(a) === all[a].zh) n.setAttribute(a, all[a].en); orig.delete(n); } }
    }
  }
  const roots = () => { const r = [document.body]; const st = document.querySelector('three-d-stage'); if (st && st.shadowRoot) r.push(st.shadowRoot); return r; };
  let busy = false;
  const mo = new MutationObserver(list => {
    if (!on() || busy) return; busy = true;
    try { for (const m of list) { if (m.type === 'childList') m.addedNodes.forEach(walk); else if (m.type === 'characterData') text(m.target); else if (m.type === 'attributes') attrs(m.target); } }
    finally { busy = false; mo.takeRecords(); }
  });
  function apply() {
    const v = on(); document.documentElement.lang = v ? ((Z() && Z().pack) || 'zh-Hant') : 'en';
    busy = true; try { for (const r of roots()) { if (v) walk(r); else restore(r); } } finally { busy = false; mo.takeRecords(); }
  }
  const watched = new Set();
  const watch = () => roots().forEach(r => { if (!watched.has(r)) { watched.add(r); mo.observe(r, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS }); } });
  watch();
  let last = null; new MutationObserver(() => { if (on() !== last) { last = on(); apply(); } }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  window.__zhUi = { tr, apply };
  // the button label itself is already bilingual; run once after the page scripts have built the interface
  const kick = () => apply();
  window.addEventListener('load', () => { watch(); kick(); setTimeout(() => { watch(); kick(); }, 1500); });
})();
