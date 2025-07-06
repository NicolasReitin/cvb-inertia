import React, { useEffect, useState } from 'react'
import axios from '@/libs/axios';


export default function Default() {

    const [joueurs, setJoueurs] = useState([]);
    const [equipesJeunes, setEquipesJeunes] = useState([]);
    const [equipesSeniors, setEquipesSeniors] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
        const fetchActualites = async() => {
          try {
            const response = await axios.get('/api/dashboard')
            setJoueurs(response.data.joueurs)
            setEquipesJeunes(response.data.equipesJeunes)
            setEquipesSeniors(response.data.equipesSeniors)                        
          } catch (err) {
            console.error(err);
          }
        }
        fetchActualites();
    }, []);


  return (
    <>
        <div className="stats">
            <div className="bloc-stats calendrier">
                <img src="/assets/icones/calendrier.png" alt="players" />
                <p><span>Saison</span> 2023 / 2024</p>
            </div>
            <div className="bloc-stats licencies">
                <img src="/assets/icones/joueur.png" alt="players" />
                <p><span>{joueurs.length}</span>Licenciés</p>
            </div>
            <div className="bloc-stats teams">
                <img src="/assets/icones/equipes.png" alt="players" />
                <p><span>{equipesJeunes.length + equipesSeniors.length}</span>Équipes</p>
            </div>
            <div className="bloc-stats vue-site">
                <img src="/assets/icones/vues_site.png" alt="players" />
                <p><span>200</span>Vues ce mois-ci</p>
            </div>
        </div>
        <div className="bloc-content">
            <div className="raccourcis">
                <h3>Raccourcis</h3>
                <div className="liens">
                    <a 
                        target='_blank'
                        href="https://ffvbbeach.org/ffvbapp/weblic/acces_licences.php"
                        className="button-raccourcis ffvolley"
                    >
                        Accès au site de la FF volley
                    </a>
                    <a 
                        target='_blank'
                        href="https://ffvbbeach.org/ffvbapp/resu/planning_club_class.php?cnclub=0149419&x=10&y=10"
                        className="button-raccourcis ffvolley"
                    >
                        Accès aux classements
                    </a>
                    <a 
                        target='_blank'
                        href="https://cd.ufolep.org/calvados/calvados_a/cms/index_public.php?us_action=show_note&ui_id_site=1&ui_id_doc=1020700002"
                        className="button-raccourcis ffvolley"
                    >
                        Accès à l'Ufolep
                    </a>
                </div>
            </div>
            <div className="first-team">
                <iframe 
                    id="6601997c66545e08ccd3f67e" 
                    height="330" 
                    src="https://v1.scorenco.com/widget/6601997c66545e08ccd3f67e/" 
                    style={{display: 'block', height: '480px' ,width: '50%', overflow: 'auto', margin: 'auto', borderWidth: '0px'}}>
                </iframe>
            </div>
        </div>
    </>
  )
}

