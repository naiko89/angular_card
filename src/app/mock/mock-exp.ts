import { Experiences } from '../interface/experiences';
import {Education} from '../interface/education';
export const EXPW: Experiences[] = [
  {id: 0, data: [ new Date('2020-02-01'), new Date('2020-12-31')],
    ditta: 'Savno', tipo: 'Ambientale/Rifiuti', impiego: 'Ufficio',
    mansioni: ['Gestione inserimento dati mezzi raccolta tramite applicativo Access, sviluppo parziale di software timbratura per snellire il flusso dati (link allegato 2).\n' +
    'Inserimento dati interventi officina tramite gestionale sviluppato per l’ inserimento e l’ esportazione dati.']},
  {id: 1, data: [ new Date('2019-02-01'), new Date('2020-01-31')],
    ditta: 'Bioman', tipo: 'Ambientale/Rifiuti', impiego: 'Ufficio Tecnico Cantiere',
    mansioni: ['Sviluppo Web-App di gestione interventi per officina meccanica:\n' +
    'Pensata per facilitare l’ inserimento dati front-office (Web-App meccanici) di un flusso di dati riguardanti gli interventi su mezzi di raccolta di più aziende.\n' +
    'Relativa parte back-office di raccolta visione,modifica dati e loro esportazione. ', 'Studio percorsi di raccolta: \n' +
    'Geolocalizzazione tramite tablet dei percorsi del bacino nord orientale, salvataggio e riproposizione gpx tramite applicazione sviluppata con utilizzo di OpenStreetMap, esportazione e riproposizione percorso tramite tablet android con GpxViewer.']},
  {id: 2, data: [ new Date('2018-04-30'), new Date('2019-01-09')],
    ditta: 'Ingam', tipo: 'Ambientale', impiego: '',
    mansioni: ['Bonifica Database: \n' +
    'Sviluppo applicazione per gestione traffico dati server ftp per l’associazione dati di raccolta rfid e distribuzione bidoni, con dati anagrafici del bacino UTI, comprendente 19 comuni del Friuli Venezia Giulia e relativa ricerca di errori e reinserimento dati.']},
  {id: 4, data: [ new Date('2017-05-01'), new Date('2017-08-31')],
    ditta: 'Savno', tipo: 'Ambientale/Rifiuti', impiego: 'Segretario',
    mansioni: ['Lavoro di ufficio back-office sportello e distribuzione bidoni comune di Vittorio Veneto e gestione magazzino.']},
  {id: 5, data: [ new Date('2015-04-01'), new Date('2015-07-01')],
    ditta: 'Teleco', tipo: 'Domotica e Automazione', impiego: '',
    mansioni: ['Inserimento dati catalogo Teleco tramite gestionale terze parti in sito web aziendale visitabile su internet, gestione del layout di tabelle ed immagini e interazione leggera di elementi DOM tramite javascript (jQuery). ']},
  {id: 6, data: [ new Date('2014-04-01'), new Date('2014-10-01')],
    ditta: 'Structura', tipo: 'Studio Ing', impiego: '',
    mansioni: ['Tirocinio sullo studio dell\' utilizzo di Mosquitto broker per ricezioni dati MQTT da scheda elettronica di terze parti per gestione dati 3G e primi passi nel settore informatico. ']},
  {id: 7, data: [ new Date('2008-09-01'), new Date('2010-01-01')],
    ditta: 'Margherita', tipo: 'Ristorazione', impiego: 'Mansione di cameriere e barista per pagare gli studi universitari',
    mansioni: ['Cameriere Barista']}
];

export const EXPI: Education[] = [
  {id: 0, data: new Date('2011'),
    istituto: 'Iscritto Ingegneria Ambiente e Risorse Udine', qualifica: 'Se possibile e richiesto posso allegare esami sostenuti'},
  {id: 1, data: new Date('2009'),
    istituto: 'Maturità Scientifica', qualifica: 'Diploma Superiore'},
];
