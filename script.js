 // Functie om de Google Sheets API te laden
function loadSheetsAPI() {
    gapi.client.load('sheets', 'v4', fetchSheetData);
  }
  
  // Functie om gegevens op te halen uit de Google Sheet
  function fetchSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1p8Uc3wcJXZXixLIjaPooNhdArAacYIAZ7idmfXRFnWk', // Vervang met je eigen Spreadsheet ID
      range: 'B:B' // Vervang met het bereik van de kolom waarin de 'ja'/'Nee'-waarden staan
    }).then(function(response) {
      var data = response.result.values;
      var rowCount = data.length;
  
      var noCount = 0;
      for (var i = 0; i < rowCount; i++) {
        if (data[i][0] === 'Nee') {
          noCount++;
        }
      }
  
      var progressBar = document.querySelector('.glass-bar');
      var fillPercentage = Math.min(noCount / 6, 1); // Bereken het vulpercentage, maximaal 1
  
      progressBar.style.width = fillPercentage * 100 + '%';
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
  