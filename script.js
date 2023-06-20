// Laad de Google Sheets API
function loadSheetsAPI() {
  gapi.client.load('sheets', 'v4', fetchSheetData);
}

// Functie om de tekst van een element te wijzigen
function changeText(elementId, text) {
  var element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Functie om gegevens op te halen uit de Google Sheet
function fetchSheetData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1p8Uc3wcJXZXixLIjaPooNhdArAacYIAZ7idmfXRFnWk', // Vervang met je eigen Spreadsheet ID
    range: 'B:B' // Vervang met het bereik van de kolom waarin de 'ja'/'Nee'-waarden staan
  }).then(function(response) {
    var data = response.result.values;
    var rowCount = data.length;

    var textFragments = ['Elke keer als je een avond niet gedronken hebt, vult de progressbar hieronder zich! Als die helemaal vol zit zul je rijkelijk beloond worden Tim!', 'Lekker bezig Timmetje, al 2 avonden op rij niet gedronken! Je weet wat dat betekent.. De beloning komt dichterbij', 'Tim, wat een kanonskogel! Voel je je al fitter?', 'Tim, Tim, absolute animal! Ik ben ervan overtuigd dat je het gaat halen!', 'Gefeliciteerd Tim, jij hebt die beloning zeker verdiend! Je krijgt van mij een lekker pilsje binnenkort om dit te vieren!']; // Voeg hier de verschillende tekstfragmenten toe
    var currentFragmentIndex = 0; // Index van het huidige tekstfragment

    for (var i = 0; i < rowCount; i++) {
      if (data[i][0] === 'Nee') {
        currentFragmentIndex = (currentFragmentIndex + 1) % textFragments.length; // Wissel naar het volgende tekstfragment
        changeText('result-text', textFragments[currentFragmentIndex]); // Verander 'result-text' naar het id van het element waarin je de tekst wilt wijzigen
        break; // Stop de lus zodra een 'Nee'-waarde wordt gevonden (als je maar één tekstfragment per keer wilt weergeven)
      }
    }

    var progressBar = document.querySelector('.glass-bar');
    var fillPercentage = Math.min(currentFragmentIndex / (textFragments.length - 1), 1); // Bereken het vulpercentage op basis van het huidige fragment

    var progressBarHeight = fillPercentage * 100 + '%';
    var progressBarBottom = 100 - (fillPercentage * 100) + '%';

    progressBar.style.height = progressBarHeight;
    progressBar.style.bottom = progressBarBottom;
    progressBar.style.backgroundColor = 'rgba(0, 128, 0, ' + fillPercentage + ')'; // Maak de kleur groener op basis van het vulpercentage
  }, function(reason) {
    console.error('Fout: ' + reason.result.error.message);
  });
}

// Initialisatie van de Google Sheets API
gapi.load('client', function() {
  gapi.client.init({
    apiKey: 'AIzaSyDcpFXMiROdpf7cKUYoI8zh2F3-mJKZO_c' // Vervang met je eigen API-sleutel
  }).then(loadSheetsAPI);
});
