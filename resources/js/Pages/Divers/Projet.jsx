import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Projet({auth}) {
  return (
    <>
        {/* <Head title='Le projet' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Le projet</h1>
            <div className='projet'>
                <div className='intro'>
                    <p>
                    Le club accueille tous types de pratiquants pour se faire plaisir ou se confronter en compétition.
                    </p>
                    <p>
                    Au Caen Volley-Ball, c'est le plaisir de partager un sport avec des moments de convivialité.
                    </p>
                    <p>
                    Pour nous, le sport est un moyen d’intégration sociale pour tous les publics quel que soit leur milieu social ou leur handicap.
                    </p>
                    <p>
                    Au travers de la pratique sportive, nous jouons un rôle d'éducateur de la vie pour nos jeunes joueurs, leur apprenons la vie en communauté et l'importance de l'entre-aide et de la solidarité.
                    </p>
                    <p>
                    Au delà de la pratique sportive, le Caen Volley Ball ambitionne de devenir un acteur majeur de la vie associative sur tout le bassin caennais.
                    </p> 
                </div>
                <div className="projet-content">
                    <h3>Caen Volley-ball, un projet humain à identité forte</h3>
                    <p>
                        <strong>1991…</strong> Naissance du premier club de volley-ball autonome à Caen. <br />
                        Le début d’une histoire d’abord, celle d’une fusion entre l’USO Mondeville (section volley du club omnisport de Mondeville durant 11 ans, ayant décompté 110 licenciés dont une équipe masculine en Nationale 3) et le Volley Club de Caen (VCC) en 1990. <br />

                        Devenu Caen Volley Ball, le club a évolué plusieurs années au niveau national (nationale 3 masculine et 14 équipes) avant de connaître des difficultés au début des années 2000, qui conduiront le club à une restructuration en profondeur. <br />
                    </p>
                    <p>
                        <strong>2001-2007…</strong> Une restructuration progressive <br />

                        C’est le début de la restructuration progressive du club, qui s’appuie sur quelques adhérents fidèles, et se base sur une reprise du développement du nombre de licenciés jeunes loisirs, grâce à une stabilisation de l’encadrement bénévole motivé. <br />
                    </p>
                    <p>
                        <strong>2008 – 2011…</strong> Stabilisation et croissance des effectifs entre 120 et 147 licenciés
                    </p>
                    <p>
                        <strong>2012-2016…</strong> Se tourner vers l’avenir ! <br />
                        <ul>
                            <li>En professionnalisant l’encadrement des jeunes et du secteur féminin, mais également en professionnalisant le développement de nouveaux projet ainsi que la recherche de nouveaux financements ;</li>
                            <li>En augmentant le nombre de participants et en développant de nouvelles pratiques ;</li>
                            <li>En retrouvant la compétition en nationale.</li>
                        </ul>     
                    </p>

                    <h3>Des Valeurs à partager</h3>
                    <h4>PLAISIR SOLIDARITÉ PARTAGE PERFORMANCE RESPECT FORMATION MIXITÉ</h4>
                    <p>
                        Au Caen Volley Ball, c’est le plaisir de partager des moments de convivialité qui prédomine. Pour nous, le sport est un moyen de sensibilisation de tous les publics, quel que soit le milieu social ou les handicaps. C’est pourquoi nous cherchons à agir comme un intégrateur social par le sport pour tous. <br />

                        Par la pratique sportive, nous jouons un rôle d’éducateur de la vie pour nos jeunes joueurs, notamment dans leur apprentissage de la vie en communauté au travers des valeurs véhiculées par notre sport collectif : l’importance de l’entre-aide et la solidarité. <br />

                        Au-delà de la pratique sportive, le Caen Volley Ball se veut également être acteur majeur de la vie associative sur tout le bassin caennais. 
                    </p>

                    <h3>L’environnement du Caen Volleyball</h3>
                    <p>
                        Nous sommes un club caennais à rayonnement régional en compétition et national sur le handisport. <br />

                        Caen est central dans l’activité bas normande et nous disposons d’un lieu de pratique central situé au cœur de la ville au Centre Sportif de La Haie Vigné. <br />

                        La quasi totalité des licenciés provient de l’agglomération caennaise mais quelques adhérents résident au-delà d'un rayon de 20 km (&lt; 5%). <br />

                        En Basse Normandie, le nombre de licences FFVB est bas, moins de 1500 licenciés FFVB. Le CVB voit son nombre d’adhérents dépasser les 140 depuis plusieurs années. En 2013, nous étions 163.
                    </p>

                    <h3>Nos objectifs</h3>
                    <p>
                        <ul>
                            <li>Eduquer par le sport</li>
                            <li>Fidéliser les publics existants</li>
                            <li>Rechercher activement de nouveaux pratiquants</li>
                            <li>Rechercher la mixité sociale et totale</li>
                            <li>Créer du lien intergénérationnel</li>
                            <li>Structurer la vie associative par l’augmentation des niveaux de compétences des bénévoles</li>
                            <li>Maintenir l’emploi d’un agent de développement par la mise en place de projets nouveaux</li>
                        </ul>
                        <br />
                        Nous travaillons avec différentes institutions et associations en partenariat, ce qui nous permet de tisser des liens et créer un nouveau réseau d’activité.
                    </p>

                    <h3>Nos principaux partenaires</h3>
                    <p>
                        <ul>
                            <li>La Ville de Caen qui nous permet d’avoir des équipements mis à disposition pour nos actions et événements, et qui participe également à un soutien financier à hauteur de 11 K€ en 2014 ;</li>
                            <li>Le Comité Départemental du Calvados de volley-ball pour les formations, les stages et autres partages de matériels ;</li>
                            <li> Le Conseil Général 14 en appui de financement sur le public jeune avec 1347 € en 2013 ;</li>
                            <li>Le Comité Départemental de l’Orne pour la mise à disposition de ressource d’encadrement ;</li>
                            <li>La Ligue de Basse-Normandie pour la gestion des championnats, la réalisation de projets et d’aide aux actions ; la mise à disposition.</li>
                            <li> Le Comité Régional du Sport Adapté pour des actions de sensibilisation à la pratique du sport pour un public en situation de handicap mental ;</li>
                            <li>Le CROS de Basse Normandie pour une labellisation et mise en place d’actions en faveur des personnes en situation de handicap moteur </li>
                            <li>L’association AE 14 pour l’aide à la gestion du club et de son emploi ;</li>
                            <li> Le Crédit Mutuel de Normandie dans le cadre du label « VALIDS-HANDICAPES pour un sport ensemble » (450€ en juin 2012).</li>
                        </ul>
                        <br />
                        <strong>Deux nouveaux partenaires</strong> (conventions) sur le projet HANDI :
                        <ul>
                            <li>La Fondation de France, appuyant le projet financièrement par mécénat ; 7 000 € en 2013</li>
                            <li>Le Groupe LA POSTE, qui va aussi appuyer nos actions HANDI. 2 000€ en 2014</li>
                        </ul>
                        <br />
                        Quelques enseignes privées d’entreprises, pour la communication, le textile et le matériel sportif spécifique (valorisation estimée entre 1000 et 1200€).
                    </p>

                    <h3>Le développement au Caen Volley ball</h3>
                    <p>
                        Le développement du Caen Volley Ball passe par la mise en place d’un certain nombre de projets, cohérents avec la pratique du volley ball et complémentaires avec la combinaison de ces projets. <br />

                        Nous portons ensemble, 5 projets nouveaux de pratique, associés à d’autres, comme le changement de logo et sa charte de communication, la newsletter mensuelle, la boutique du club, l’adhésion à l’association ATOUTSPORTEMPLOI et la labelisation « VALIDS-HANDICAPES pour un sport ensemble » <br />

                        C’est pour conduire tous ces projets nouveaux que le Caen Volley Ball emploie depuis le 1 janvier 2012, un professionnel de l’animation et du développement à la pratique sportive du volley-ball. <br />

                        Cet agent a trois grandes missions : <br />

                        <strong>Développer de nouveaux projets</strong> à destination de publics spécifiques : scolaire, féminin, jeune, celui des quartiers défavorisés et enfin celui du handisport. <br />

                        <strong>Former et superviser</strong> directement, les nouveaux jeunes joueurs (ses) du plus jeune à junior, les jeunes équipes féminines, les personnes vivant un handicap et les bénévoles. <br />

                        <strong>Déployer des événements sportifs</strong> de type « volley pour tous », tournois locaux, régionaux et nationaux. <br />

                        De plus, et sans délaisser la performance, le club a pour ambition de pousser son objectif sportif vers le haut niveau, national 3 à deux ans et nationale 2 à 5 ans. <br />

                        Cette ambition s’exprime particulièrement par la formation actuelle de jeunes joueurs issus du club. <br />

                        <strong>En quelques déjà 3 ans</strong>, le club a consolidé son école de volley, a pris en charge une équipe de filles sourdes, poursuit des actions dans le domaine du handisport et du sport adapté. Cela passe par la consolidation de sa section pour les sourds et aussi par la mise en place d’une offre de pratique pour les autres handicaps. C’est ainsi que le club s’est a été labellisé en juin 2012 par le CROS de Basse-Normandie. Label <strong>« VALIDS-HANDICAPES pour un sport ensemble »</strong>. <br />
                        
                        Le club s’est fait repéré pour son action dans ces domaines et a été sollicité par l’IRTS (Institut Régional des Travailleurs Sociaux) pour former des éducateurs spécialisés au «volley assis » ou encore par le <strong>CRAF</strong> d’HOULGATE. L’UFR STAPS a aussi fait appel à nos services sur se sujet pour une intervention sur la nuit du volley avec comme thème le handisport. <br />

                        Concernant les quartiers, si trois initiatives et prises de contacts ont eu lieu et n’ont donné lieu qu’à quelques actions depuis 2012, le projet va se développer enfin sur un programme de 8 semaines en période printemps / été 2014. <br />

                        Le Caen Volley Ball poursuit sa volonté de promouvoir la <strong>convivialité</strong> en mettant les ressources nécessaires pour renforcer la qualité et favoriser l’accès au public féminin. <br />

                        Concernant la santé par le sport, le Caen Volley Ball a préparé une offre à destination des chefs d’entreprises (celles partenaires du club dans un premier temps) qui devrait voir le jour en 2014.. Le développement de cette section pourra être également pour le club une ressource financière supplémentaire d’appui. <br />

                        Pour tous ces secteurs, le club souhaite créer les conditions de <strong>partage</strong>, de <strong>convivialité</strong> ou le mot <strong>Mixité</strong> prend tous son sens. <br />
                    </p>
                    <h4>
                        Les 5 priorités, pour les 3 saisons à venir sont : <br />

                        L’école de Volley, le handicap, le secteur féminin, <br />

                        « les éloignés du sport » des quartiers et la santé par le sport
                    </h4>

                    <h3>1 - L’éducation par le sport :</h3>
                    <p>
                        Ce projet <strong>« École de volley »</strong> s’adresse à un public de jeunes de 5 à 17 ans. Il est désormais en place depuis 9 ans. <br />

                        Néanmoins, le projet 2011-2016 a pour priorité d’accroître sur le plan quantitatif, de manière conséquente, le nombre de ces jeunes licenciés en menant des actions de partenariats avec des écoles primaires et des collèges. <br />

                        Après avoir effectué dans un premier temps des actions de sensibilisation par des journées portes ouvertes, nous avons mis en place des actions sur le temps scolaire et périscolaire. <br />

                        Les actions, démarrées avec les écoles en 2012, permettent d’apporter aux enseignants une autre approche de l’EPS, par le biais du Volley, en concordance avec les attentes des publics ciblés. <br />

                        Par ailleurs, nous avons ouvert en septembre 2013 deux nouvelles activités : <br />
                            <ul>
                                <li>Une section « BABY VOLLEY » accueillant les enfants dès l’âge de 4 ans ;</li>
                                <li>Une offre de service en périscolaire auprès d’établissements primaires proches.</li>
                            </ul>

                        De manière globale, le projet <strong>« école de volley »</strong> consiste à développer fortement la structure de formation déjà en place, afin de devenir un grand réservoir d’adhérents à la pratique du volley-ball, de bénévoles nécessaires au fonctionnement des différentes pratiques ainsi que de futurs encadrants indispensables à la vie associative. <br />

                        De manière générale, ce projet permet également un rayonnement du volley-ball en dehors des « murs » de notre association, avec des interventions en extérieur. <br />
                    </p>

                    <h3>2 - Le handicap :</h3>
                    <p>
                        Ce projet <strong>« volley pour tous »</strong> s’adresse au public en situation de handicap  <br />

                        Ce projet a aussi pour but de sensibiliser tous les publics à la situation du handicap <br />

                        Ce projet a pour ambition de mettre en place un accueil de personnes ayant des handicaps différents. Pour cela, le Caen Volley Ball souhaite maintenir sa section de volley pour les sourds et continuer son partenariat avec le comité régional de sport adapté afin de mettre en place au moins une séance hebdomadaire pour les personnes en situation de handicaps mentaux. <br />

                        Pour le handicap physique, nous souhaiterions créer une section qui favorise l’accès aux personnes dans cette situation et proposer un créneau de volley assis, une des disciplines paralympiques. Le volley assis permet aux personnes ne pouvant pas pratiquer la forme classique du volley, notamment à cause de handicaps physiques plus ou moins visibles, de pouvoir exercer une autre forme du volley-ball adaptée à leur situation.
                    </p>

                    <h3>3 - La mixité</h3>
                    <p>
                        Ce projet est dédié notamment à l’accueil du public féminin de tout âge. <br />

                        C‘est par une politique qualitative d’encadrement et une mise à disposition de moyens techniques que le Caen Volley Ball pense pouvoir accroître et favoriser l’accès au sport pour les jeunes filles et les femmes. <br />

                        Il sera aussi mis en place une tarification favorable au public étudiant (public à conquérir en permanence), notamment en ne répercutant pas trop l’impact du coût d’encadrement sur la cotisation. En effet, l’emploi est fléché directement sur ce public. <br />

                        Le Caen Volley Ball permet de répondre aux différentes attentes de ce public, en matière de formation sportive, de compétition ou de loisir. Par le biais de ses statuts associatifs, l'association cherche par ailleurs à faire participer ce public féminin à la gestion de la vie associative.
                    </p>

                    <h3>4 - Les quartiers prioritaires</h3>
                    <p>
                        Ce projet a pour but de favoriser l’accès aux pratiques sportives, celle du volley-ball en particulier, à toute personne éloignée du sport notamment dans « les quartiers », au sein desquels l'offre sportive est plus limitée. <br />

                        En partenariat avec les maisons de quartiers et associations dédiées aux vies de quartiers, le Caen Volley Ball va mettre en place des actions de convivialité et de découverte autour de terrains de volley de tous types de surface. <br />

                        Il sera également mis en place une politique tarifaire favorable pour les personnes provenant de ces quartiers, notamment par le biais de nos licences évènementielles.
                    </p>

                    <h3>5 - La santé par le sport</h3>
                    <p>
                        Nous savons les dirigeants d'entreprises très impliqués dans leur travail au risque de négliger leur santé (constat fait des risques sur la santé au regard des responsabilités des chefs d’entreprises). <br />

                        Aussi, l’idée de rechercher une solution « gagnant/gagnant » pour nos partenaires comme pour notre association, a-t-elle débouché sur l'idée de développer ce projet de santé par le sport. <br />

                        En effet, en proposant un accueil privilégié en contrepartie d'une participation financière, par une séance pratique sur la prise de conscience de leur capacité physique, la santé s’en trouve mise en évidence. Nous pouvons alors proposer des exercices pratiques personnalisés tout en les réalisant dans la cadre du volley. <br />

                        Ainsi, santé par le sport et découverte d’une pratique s’en trouvent réunies. <br />

                        Pour compléter, nous savons que la question d'un partenariat avec des entreprises se pose car nous ne disposons pas d’une « vitrine de communication » suffisante pour leur procurer un vrai retour de leur investissement en sponsoring. En effet, notre sport manque de visibilité et nos compétitions attirent peu de public dans notre gymnase (nous ne disposons d'ailleurs pas de tribunes, nous n'avons pas de supports publicitaires visibles au plus large des publics, et il n'existe pas de communication médiatique pour le volley-ball sur aucun support). <br />  <br />                    

                        Alors, lorsque la simplicité et la convivialité sont au RDV…Nous facilitons la santé par le sport et une part de financement du club.
                    </p>
                </div>

            </div>
        </section>


        <Footer />
    </>
  )
}
