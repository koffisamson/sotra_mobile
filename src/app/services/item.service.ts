import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    // {
    //   'id': "1",
    //   'ligne': "02",
    //   'depart': "Gare Marcory",
    //   'arrivee': "Cité Fairmond",
    //   'description': 'marcory treichville plateau adjame attecoube',
    //   'gare': "nord marcory ca ",
    // },
    {   'id': '1',
      'ligne': '02',
      'terminus1': 'GARE MARCORY',
      'terminus2': 'CITE FAIRMONT',
      // tslint:disable-next-line: max-line-length
      'description': 'marcory treichville plateau adjame attecoube',
      'depot': 'marcory treichville platerau adjame attecoube',
      'depart1': 'nord  marcory bateau ',
      'description2': '',
       },
     {
      'id': '2',
      'ligne': '03',
      'terminus1': 'GARE NORD ADJAME',
      'terminus2': 'TERMINUS ALIODAN',
      'description': 'koumassi marcory treichville plateau adjame',
      'depot': 'koumassi marcory treichville plateau adjame',
      'depart1': 'nord bateau marcory koumassi',
      'description2': '',},
    { 'id': '3',
      'ligne': '04',
      'terminus1': 'GARE MARCORY',
      'terminus2': 'ATTECOUBE',
      // tslint:disable-next-line: max-line-length
      'description': ' marcory treichville plateau adjame attecoube',
      'depot': 'marcory treichville plateau adjame attecoube',
      'depart1': 'nord bateau marcory koumassi',
      'description2': '', },
    { 'id': 4,
      'ligne': '05',
      'terminus1': 'KOUMASSI NORD EST',
      'terminus2': 'CITE ADMINISTRATIVE PLATEAU',
      'description': 'marcory treichville plateau koumassi',
      'depot': 'koumassi marcory treichville plateau',
      'depart1': 'sud bateau',
      'description2': ' ',},
    { 'id': '5',
      'ligne': '06',
      'terminus1': 'AEROPORT FHB',
      'terminus2': 'GARE SUD PLATEAU',
      // tslint:disable-next-line: max-line-length
      'description': 'marcory treichville plateau port-bouet',
      'depot': 'marcory treichville plateau port-bouet ',
      'depart1': 'sud bateau ',
      'description2': '',},
    { 'id': '6',
      'ligne': '07',
      'terminus1': 'VRIDI CITE',
      'terminus2': 'GARE MARCORY',
      // tslint:disable-next-line: max-line-length
      'description': 'marcory treichville port-bouet',
      'depot': 'marcory treichville port-bouet',
      'depart1': 'bateau marcory ',
      'description2': '',},
    { 'id': '7',
      'ligne': '08',
      'terminus1': 'GARE ABOBO',
      'terminus2': 'CITE ADMINISTRATIVE PLATEAU',
      'description': ' abobo plateau adjame  ',
      'depot': 'abobo plateau adjame ',
      'depart1': 'nord abobo sud',
      'description2': '1er Arrêt Cité Fermont-Gendarmerie-Station S',},
    { 'id': '8',
      'ligne': '10',
      'terminus1': 'GARE NORD ADJAME',
      'terminus2': 'GARE SUD PLATEAU',
      'description': ' plateau adjame  ',
      'depot': 'plateau adjame ',
      'depart1': 'nord sud',
      'description2': '',},
    { 'id': '9',
      'ligne': '11',
      'terminus1': 'KOUMASSI MESANO',
      'terminus2': 'GARE NORD ADJAME',      
      'description': 'marcory koumassi adjame',
      'depot': 'marcory koumassi adjame',
      'depart1': 'nord koumassi',
      'description2': ' ',},
    { 'id': '10',
      'ligne': '12',
      'terminus1': 'PORT BOUET PHARE',
      'terminus2': 'GARE NORD ADJAME',
      // tslint:disable-next-line: max-line-length
      'description': ' marcory treichville port-bouet koumassi plateau adjame',
      'depot': 'marcory treichville port-bouet koumassi plateau adjame',
      'depart1': 'nord bateau nord',
      'description2': '',},
    { 'id': '11',
      'ligne': '13',
      'terminus1': 'GARE KOUMASSI',
      'terminus2': 'GARE NORD ADJAME',
      'description': ' GARE KOUMASSI - GARE NORD ADJAME',
      'depot': 'KOUMASSI',
      'depart1': '',
      'description2': '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { 'id': '12',
      'ligne': '14',
      'terminus1': 'WILLIAMSVILLE',
      'terminus2': 'GARE MARCORY',
      'description': ' WILLIAMSVILLE -  GARE MARCORY ',
      'depot': 'WILLIAM CIVIL',
      'depart1': '',
      'description2': '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { 'id': 13,
      'ligne': '15',
      'terminus1': 'GARE ABOBO SOGEFIHA',
      'terminus2': 'GARE SUD PLATEAU',
      'description': 'GARE SUD PLATEAU  - GARE ABOBO SOGEFIHA ',
      'depot': 'ABOBO',
      'depart1': '',
      'description2': '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 14,
      ligne: '16',
      terminus1: 'GARE ABOBO SOGEFIHA',
      terminus2: 'GARE SUD PLATEAU',
      description: ' GARE SUD PLATEAU  -  GARE ABOBO SOGEFIHA ',
      depot: 'ABOBO',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { id: 15,
      ligne: '17',
      terminus1: 'GONZAGUEVILLE',
      terminus2: 'VRIDI CANAL',
      // tslint:disable-next-line: max-line-length
      description: ' GONZAGUEVILLE – Autoroute de Bassam – 43è BIMA -  Lycée Mod PB-- Phcie Ocean - Rue caraïbe  - Cimetière de Port-Bouet - Bvd de petit Bassam - Bvd de Vridi – Texaco canal  - VRIDI CANAL ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 16,
      ligne: '18',
      terminus1: 'CENTRE PILOTE PORT BOUET',
      terminus2: 'GARE SUD PLATEAU',
      // tslint:disable-next-line: max-line-length
      description: 'CENTRE PILOTE PORT BOUET – Abattoir PB - Bvd  de petit Bassam – Bvd du Port – CHU Treich – Rue 38 Treich - Pont Degaule – GARE SUD PLATEAU ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
     {
      id: 17,
      ligne: '19',
      terminus1: 'GARE NORD ADJAME',
      terminus2: 'VRIDI IRAN',
      description: ' GARE NORD ADJAME - VRIDI IRAN ',
      depot: 'COCODY',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
     {
      id: 18,
      ligne: '20',
      terminus1: 'PRISON CIVILE YOPOUGON',
      terminus2: 'GARE SUD PLATEAU',
       description: ' PRISON CIVILE YOPOUGON - GARE SUD PLATEAU ',
       depot: 'YOPOUGON',
       depart1: '',
       description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { id: 19,
      ligne: '21',
       terminus1: 'ECOLE DE POLICE COCODY',
       terminus2: 'CHU DE TREICHVILLE',
       description: ' CHU DE TREICHVILLE - ECOLE DE POLICE COCODY ',
       depot: 'KOUMASSI',
       depart1: '',
       description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { id: 20,
      ligne: '22',
      terminus1: 'CINEMA ENTENTE TREICHVILLE',
      terminus2: 'GARE NORD ADJAME',
      description: 'CINEMA ENTENTE TREICHVILLE - GARE NORD ADJAME ',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 21,
      ligne: '23',
      terminus1: 'VRIDI CANAL',
      terminus2: 'GARE KOUMASSI',
      // tslint:disable-next-line: max-line-length
      description: ' GARE KOUMASSI – Collège Ajavon -  Bvd du 7 décembre -  Bvd VGE – CHU Treich -  Bvd du Port  - Pont vridi - VRIDI CANAL ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 22,
      ligne: '24',
      terminus1: 'KOUMASSI NORD EST',
      terminus2: 'TRI POSTAL VRIDI',
      description: ' KOUMASSI NORD EST - TRI POSTAL VRIDI ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 23,
      ligne: '25',
      terminus1: 'KOUMASSI SICOGI',
      terminus2: 'HOTEL DE VILLE PLATEAU',
      description: 'KOUMASSI SICOGI - GARE SUD PLATEAU - HOTEL DE VILLE PLATEAU ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 24,
      ligne: '26',
      terminus1: 'GARE NORD ADJAME',
      terminus2: 'GARE KOUMASSI',
      description: 'GARE NORD ADJAME - GARE KOUMASSI ',
      depot: 'COCODY',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 25,
      ligne: '27',
      terminus1: 'NIANGON SUD A GAUCHE YOPOUGON',
      terminus2: 'GARE SUD PLATEAU',
      description: 'NIANGON SUD A GAUCHE YOPOUGON - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    { id: 26,
      ligne: '28',
      terminus1: 'GARE SUD PLATEAU',
      terminus2: 'RIVIERA  M POUTO',
      description: ' GARE SUD PLATEAU - RIVIERA M POUTO ',
      depot: 'ABOBO',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 27,
      ligne: '29',
      terminus1: 'DERRIERE WARF PORT-BOUET',
      terminus2: 'GARE NORD ADJAME',
      // tslint:disable-next-line: max-line-length
      description: 'DERRIERE WARF PORT-BOUET – Bvd de Bassam – Port Bouet Phare – Centre Pilote – VGE – OSER – notre Dame d Afrique – Bvd de Marseille – CHU Treich – Rue 38 Treich.– Pont Degaule – GS -  Cash Center Plateau – CCIA – Bvd Nangui Abrogoua Adjamé - GARE NORD ADJAME ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 28,
      ligne: '30',
      terminus1: 'YOPOUGON KOUTE',
      terminus2: 'GARE SUD PLATEAU',
      description: ' YOPOUGON KOUTE -  GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 29,
      ligne: '31',
      terminus1: 'ALLIODAN KOUMASSI',
      terminus2: 'COMMISSARIAT DU PORT TREICHVILLE',
      description: ' ALLIODAN KOUMASSI - COMMISSARIAT DU PORT TREICHVILLE ',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 30,
      ligne: '32',
      terminus1: 'KOUMASSI AKROMIABLA',
      terminus2: 'COMMISSARIAT DU PORT TREICHVILLE',
      description: ' KOUMASSI AKROMIABLA - COMMISSARIAT DU PORT TREICHVILLE ',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      ligne: '33',
      terminus1: 'GARE KOUMASSI',
      terminus2: 'GARE SUD PLATEAU ',
      description: ' GARE KOUMASSI - GARE SUD PLATEAU ',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '1er Arrêt Cité Fermont-Gendarmerie-Station Shell-Gare Nord-Mosquée Adjamé-Pharmacie Banco-Dispensaire Adjamé-Forum-Mairie Adjamé-INSP-Musée du Plateau-CCIA-Palais de justice-60 lgts plateaux-Gallerie du parc-Cité Policière-2e Arrondissement Treichville-Ancien BRACODI-SOGELEC-Tranchaine-Parc des Sports-Arret CHU-PTT km4-Pharmacie Santé Publique-DROCOLOR-Patisserie PAUL bietrire-CETI-ECG-Carrefour Rally-Arrêt CIE-Boulangerie Pain Chaud Marcory-Eglise Sainte Thérèse-station Shell-Gare Marcory ',},
    {
      id: 31,
      ligne: '34',
      terminus1: ' GESCO YOPOUGON ',
      terminus2: 'CITE ADMINISTRATIVE PLATEAU ',
      description: '  GESCO YOPOUGON - CITE ADMINISTRATIVE PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',    
      description2: '',},
    {
      id: 32,
      ligne: '35',
      terminus1: 'GARE NORD ADJAME',
      terminus2: 'GOBELET COCODY',
      description: ' GARE NORD ADJAME - GOBELET COCODY ',
      depot: 'KOUMASSI',
      depart1: '',     
      description2: '',},
    {
      id: 33,
      ligne: '36',
      terminus1: 'GARE ABOBODOUME',
      terminus2: 'GARE NORD ADJAME',
      description: 'GARE ABOBODOUME - GARE NORD ADJAME ',
      depot: 'YOPOUGON',
      depart1: '',     
      description2: '',},
    {
      id: 34,
      ligne: '37',
      terminus1: 'CAMP MILITAIRE YOPOUGON',
      terminus2: 'GARE SUD PLATEAU',
      description: ' CAMP MILITAIRE YOPOUGON - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 35,
      ligne: '39',
      terminus1: ' NIANGON SUD A DROITE YOPOUGON',
      terminus2: ' GARE SUD PLATEAU ',
      description: ' NIANGON SUD A DROITE YOPOUGON - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 36,
      ligne: '40',
      terminus1: '  YOPOUGON KOUTE ',
      terminus2: ' GARE SUD PLATEAU ',
      description: ' YOPOUGON KOUTE  - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 37,
      ligne: '41',
      terminus1: ' RIVIERA M POUTO ',
      terminus2: ' GARE NORD ADJAME',
      description: ' RIVIERA MPOUTO - LIBERTE ADJAME - GARE NORD ADJAME' ,
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 38,
      ligne: '42',
      terminus1: ' YOPOUGON SIDECI ',
      terminus2: ' GARE ABOBODOUME',
      description: ' YOPOUGON SIDECI - GARE ABOBODOUME ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 39,
      ligne: '43',
      terminus1: ' GARE NORD ADJAME',
      terminus2: ' YOPOUGON KOUTE ',
      description: '  GARE NORD ADJAME - YOPOUGON KOUTE ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 40,
      ligne: '44',
      terminus1: ' CITE VERTE YOPOUGON',
      terminus2: ' GARE ABOBODOUME',
      description: ' CITE VERTE YOPOUGON - GARE ABOBODOUME ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 41,
      ligne: '45',
      terminus1: 'CENTRE BUS ABOBO ',
      terminus2: ' GARE NORD ADJAME ',
      description: ' CENTRE BUS ABOBO - GARE NORD ADJAME - ABOBO GENDARMERIE - ABOBO PK18 ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 42,
      ligne: '46',
      terminus1: ' YOPOUGON SIDECI',
      terminus2: ' CITE ADMINISTRATIVE PLATEAU',
      description: ' YOPOUGON SIDECI - CITE ADMINISTRATIVE PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 43,
      ligne: '47',
      terminus1: ' GARE ABOBODOUME',
      terminus2: ' YOPOUGON ATTIE SOGEFIHA',
      description: ' GARE ABOBODOUME - YOPOUGON ATTIE SOGEFIHA ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 44,
      ligne: '48',
      terminus1: ' NIANGON SUD A DROITE YOPOUGON',
      terminus2: ' GARE ABOBODOUME',
      description: ' NIANGON SUD A DROITE YOPOUGON - GARE ABOBODOUME ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 45,
      ligne: '49',
      terminus1: ' GARE ABOBO SOGEFIHA',
      terminus2: ' GARE CAMPUS COCODY',
      description: ' GARE ABOBO SOGEFIHA - GARE CAMPUS COCODY ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 46,
      ligne: '52',
      terminus1: ' SAGBE ABOBO ',
      terminus2: ' GARE CAMPUS COCODY ',
      description: ' SAGBE ABOBO - GARE CAMPUS COCODY ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 47,
      ligne: '53',
      terminus1: 'VRIDI CITE/GONZAGUEVILLE',
      terminus2: ' GARE CAMPUS COCODY',
      // tslint:disable-next-line: max-line-length
      description: ' VRIDI CITE / INFS PORT BOUET / GONZAGUEVILLE - Bvd  de petit Bassam - Rue caraïbe – marché de nuit – PB phare – Autoroute de Bassam – VGE – Piscine détat – Pont Degaule – Bvd lagunaire – Lycée technique – SODEMI – GARE CAMPUS COCODY ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 48,
      ligne: '55',
      terminus1: ' BLOKOSSO COCODY',
      terminus2: ' GARE SUD PLATEAU ',
      description: ' BLOKOSSO COCODY - GARE SUD PLATEAU ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 49,
      ligne: '58',
      terminus1: 'LIBERTE ADJAME',
      terminus2: ' CITE DU PORT TREICHVILLE',
      description: 'LIBERTE ADJAME - CITE DU PORT TREICHVILLE ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 50,
      ligne: '59',
      terminus1: ' GARE NORD ADJAME',
      terminus2: 'CHU DE TREICHVILLE',
      description: ' GARE NORD ADJAME - CHU DE TREICHVILLE ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 51,
      ligne: '64',
      terminus1: 'BLOKOSSO COCODY',
      terminus2: ' BLOKOSSO COCODY',
      description: ' BLOKOSSO COCODY  - GARE NORD ADJAME  ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 52,
      ligne: '66',
      terminus1: ' MARCHE TREICHVILLE',
      terminus2: ' ANANI ROUTE DE BASSAM',
      description: ' ANANI ROUTE DE BASSAM - MARCHE TREICHVILLE ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 53,
      ligne: '67',
      terminus1: ' GONZAGUEVILLE',
      terminus2: ' MARCHE TREICHVILLE',
      description: ' GONZAGUEVILLE / ANANI ROUTE DE BASSAM  - Bvd VGE -  Rue 12 - MARCHE TREICHVILLE ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 54,
      ligne: '68',
      terminus1: ' GONZAGUEVILLE',
      terminus2: ' GARE KOUMASSI ',
      // tslint:disable-next-line: max-line-length
      description: ' GONZAGUEVILLE / ANANI ROUTE DE BASSAM  - Autoroute de Bassam – PB Phare – Phcie Océan – Centre Pilote – Hôpital PB – Akwaba – VGE – Grd Car. Ksi - Bd du 7 Décembre - GARE KOUMASSI ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 55,
      ligne: '75',
      terminus1: 'ABOBO BAOULE CITE',
      terminus2: ' GARE NORD ADJAME',
      description: ' ABOBO BAOULE CITE- ADMINISTRATIVE PLATEAU - ABOBO BIABOU - GARE NORD ADJAME ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 56,
      ligne: '76',
      terminus1: ' ABOBO PK 18',
      terminus2: ' CITE ADMINISTRATIVE PLATEAU',
      description: ' ABOBO PK 18 - CITE ADMINISTRATIVE PLATEAU ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 57,
      ligne: '78',
      terminus1: ' RIVIERA M BADON',
      terminus2: ' GARE NORD ADJAME',
      description: ' RIVIERA M POUTO - RIVIERA M BADON - GARE NORD ADJAME ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 58,
      ligne: '81',
      terminus1: ' ANGRE COCODY',
      terminus2: ' GARE NORD ADJAME',
      description: ' ANGRE COCODY - GARE NORD ADJAME',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 59,
      ligne: '82',
      terminus1: 'ANGRE COCODY',
      terminus2: 'GARE SUD PLATEAU',
      description: ' ANGRE COCODY - GARE SUD PLATEAU ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 60,
      ligne: '83',
      terminus1: ' ECOLE DE POLICE COCODY',
      terminus2: ' GARE NORD ADJAME',
      description: ' ECOLE DE POLICE COCODY - RIVIERA AFRICAINE - GARE NORD ADJAME',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 61,
      ligne: '84',
      terminus1: 'BLOKOSSO COCODY',
      terminus2: ' GARE NORD ADJAME',
      description: ' BLOKOSSO COCODY - GARE NORD ADJAME ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 62,
      ligne: '85',
      terminus1: ' YOPOUGON KOUTE',
      terminus2: ' GARE CAMPUS COCODY',
      description: 'YOPOUGON KOUTE - YOPOUGON PHALENES - GARE CAMPUS COCODY',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 63,
      ligne: '90',
      terminus1: ' BLOKOSSO COCODY',
      terminus2: ' TERMINUS MAHOU PLATEAU DOKUI',
      description: ' BLOKOSSO COCODY -ANGRE DJIBI  COCODY - TERMINUS MAHOU PLATEAU DOKUI',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 64,
      ligne: '91',
      terminus1: 'LIBERTE ADJAME',
      terminus2: ' HOTEL DE VILLE PLATEAU',
      description: ' LIBERTE ADJAME - HOTEL DE VILLE PLATEAU',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 65,
      ligne: '92',
      terminus1: 'KOUMASSI NORD EST',
      terminus2: ' GARE NORD ADJAME',
      description: ' KOUMASSI NORD EST - GARE NORD ADJAME',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '',},
    {
      id: 66,
      ligne: '93',
      terminus1: ' ST JEAN COCODY',
      terminus2: ' CHU DE TREICHVILLE',
      description: ' ST JEAN COCODY - CHU DE TREICHVILLE ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 67,
      ligne: '94',
      terminus1: ' BLOKOSSO COCODY',
      terminus2: ' GARE MARCORY',
      description: ' BLOKOSSO COCODY - GARE MARCORY',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 68,
      ligne: '201',
      terminus1: 'HOTEL DE VILLE PLATEAU',
      terminus2: 'ABOBO PK 18',
      description: ' HOTEL DE VILLE PLATEAU - ABOBO PK 18 ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 69,
      ligne: '202',
      terminus1: 'ATTOBAN COCODY',
      terminus2: 'GARE SUD PLATEAU',
      description: ' ATTOBAN COCODY - GARE SUD PLATEAU ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 70,
      ligne: '203',
      terminus1: 'GARE ABOBO',
      terminus2: 'GARE SUD PLATEAU',
      description: ' GARE ABOBO - GARE SUD PLATEAU ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 71,
      ligne: '204',
      terminus1: 'NIANGON SUD A GAUCHE YOPOUGON',
      terminus2: 'GARE SUD PLATEAU',
      description: ' ATTOBAN COCODY - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 72,
      ligne: '205',
      terminus1: 'ANGRE DJIBI  COCODY',
      terminus2: 'GARE SUD PLATEAU',
      description: 'ANGRE DJIBI  COCODY - GARE SUD PLATEAU - TERMINUS MAHOU PLATEAU DOKUI ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 73,
      ligne: '206',
      terminus1: 'YOPOUGON ST ANDRE',
      terminus2: 'HOTEL DE VILLE PLATEAU',
      description: 'YOPOUGON ST ANDRE - YOPOUGON KOUTE - HOTEL DE VILLE PLATEAU - YOPOUGON ATTIE SOGEFIHA ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 74,
      ligne: '207',
      terminus1: ' KOUMASSI NORD EST',
      terminus2: ' CITE ADMINISTRATIVE PLATEAU ',
      description: ' KOUMASSI NORD EST - CITE ADMINISTRATIVE PLATEAU ',
      depot: 'KOUMASSI',
      depart1: '',
      description2: '',},
    {
      id: 75,
      ligne: '208',
      terminus1: ' HOTEL DE VILLE PLATEAU',
      terminus2: ' MAIRIE ABOBO',
      description: 'MAIRIE ABOBO - ABOBO BAOULE - HOTEL DE VILLE PLATEAU ',
      depot: 'ABOBO',
      depart1: '',
      description2: '',},
    {
      id: 76,
      ligne: '209',
      terminus1: 'YOPOUGON GHANDI',
      terminus2: 'GARE SUD PLATEAU',
      description: ' YOPOUGON GHANDI - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 77,
      ligne: '210',
      terminus1: 'RIVIERA LES ROSIERS',
      terminus2: 'GARE SUD PLATEAU ',
      description: ' RIVIERA LES ROSIERS - GARE SUD PLATEAU ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 78,
      ligne: '211',
      terminus1: 'GONZAGUEVILLE',
      terminus2: ' CITE ADMINISTRATIVE PLATEAU',
      // tslint:disable-next-line: max-line-length
      description: ' GONZAGUEVILLE -  Autoroute de Bassam – PB Phare – Hôpital – Akwaba – biétry – bd de Marseille – CHU treich. - Gare Bassam – VGE – Pont FHB – GS – place de la république – 220 logements – palais de justice - CITE ADMINISTRATIVE PLATEAU ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 79,
      ligne: '212',
      terminus1: 'NIANGON SUD A DROITE YOPOUGON',
      terminus2: 'GARE SUD PLATEAU',
      description: ' NIANGON SUD A DROITE YOPOUGON - GARE SUD PLATEAU ',
      depot: 'YOPOUGON',
      depart1: '',
      description2: '',},
    {
      id: 80,
      ligne: '405',
      terminus1: 'ANANI ROUTE DE BASSAM',
      terminus2: 'MARCHE ADJAME',
      // tslint:disable-next-line: max-line-length
      description: 'ANANI ROUTE DE BASSAM - Autoroute de Bassam – Bvd de petit Bassam – SIVENG VRIDI /-  Bvd du Port – CPO - Pont FHB -  MARCHE ADJAME ',
      depot: 'PORT-BOUET',
      depart1: '',
      description2: '',},
    {
      id: 81,
      ligne: '412',
      terminus1: 'BLOKOSSO COCODY',
      terminus2: 'MARCHE ADJAME ',
      // tslint:disable-next-line: max-line-length
      description: 'BLOKOSSO COCODY -  Hotel Ivoire – PMI – SODEMI – Pont Lycée Technique – Phcie Reboul – Mairie Adjamé – MARCHE ADJAME ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 81,
      ligne: '610',
      terminus1: 'PLATE FORME BINGERVILLE',
      terminus2: 'GARE NORD ADJAME ',
      description: 'PLATE FORME BINGERVILLE - LYCEE GARCON DE BINGERVILLE - LIBERTE ADJAME - GARE NORD ADJAME ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 82,
      ligne: '701',
      terminus1: 'terminus Chateaux',
      terminus2: 'blokoss terminus 90',
      description: ' terminus Chateaux - blokoss terminus 90 ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 83,
      ligne: '704',
      terminus1: 'Angré terminus 81 - 82',
      terminus2: 'Cocody orca deco , 9 km',
      description: ' Angré terminus 81 - 82 - Cocody orca deco , 9 km ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 84,
      ligne: '705',
      terminus1: 'Angré terminus 81 - 82',
      terminus2: 'riviera 2',
      description: 'Angré terminus 81 - 82 - riviera 2',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 85,
      ligne: '706',
      terminus1: 'Angré rosier terminus 210',
      terminus2: 'cocody saint jean',
      description: 'Angré rosier terminus 210 - cocody saint jean ',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 86,
      ligne: '707',
      terminus1: 'zoo',
      terminus2: 'cocody saint jean',
      description: ' zoo - Sainte thérese - cocody saint jean',
      depot: 'COCODY',
      depart1: '',
      description2: '',},
    {
      id: 87,
      ligne: '710',
      terminus1: 'Abatta village',
      terminus2: 'cocody carefour la vie',
      description: ' Abatta village - cocody carefour la vie ',
      depot: 'COCODY',
      depart1: '',
      depart2: '',
      description2: '',}

  ]

  constructor() { }

  // createItem(title, description){

  //   let randomId = Math.random().toString(36).substr(2, 5);

  //   this.items.push({
  //     'id': randomId,
  //     'title': title,
  //     'description': description
  //   });
  // }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  // updateItem(newValues){
  //    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
  //    this.items[itemIndex] = newValues;
  //  }
  
}
