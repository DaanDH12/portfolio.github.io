// Functie om de Google Sheets API te laden
function loadSheetsAPI() {
    gapi.client.load('sheets', 'v4', fetchSheetData);
  }
  
  // Functie om gegevens op te halen uit de Google Sheet
  function fetchSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1p8Uc3wcJXZXixLIjaPooNhdArAacYIAZ7idmfXRFnWk', // Vervang met je eigen Spreadsheet ID
      range: 'B:B', // Vervang met het bereik van de kolom waarin de 'nee'-waarden staan
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(function(response) {
      var data = response.result.values;
      var rowCount = data.length;
  
      var yesCount = 0;
      for (var i = 0; i < rowCount; i++) {
        if (data[i][0] === 'nee') {
          yesCount++;
        }
      }
      var progressBar = document.querySelector('.progress-bar');
      if (yesCount >= 6) {
        progressBar.style.width = '100%';
      } else {
        progressBar.style.width = (yesCount / 6) * 100 + '%';
      }
    }, function(reason) {
      console.error(`Error: ${reason.result.error.message}`);
    });
  }

  
  
  // Initialisatie van de Google Sheets API
  gapi.load('client', function() {
    gapi.client.init({
      apiKey: 'AIzaSyDcpFXMiROdpf7cKUYoI8zh2F3-mJKZO_c' // Vervang met je eigen API-sleutel
    }).then(loadSheetsAPI);
  });
  