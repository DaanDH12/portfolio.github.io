// Functie om de Google Sheets API te laden
function loadSheetsAPI() {
    gapi.client.load('sheets', 'v4', fetchSheetData);
  }
  
  // Functie om gegevens op te halen uit de Google Sheet
  function fetchSheetData() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1p8Uc3wcJXZXixLIjaPooNhdArAacYIAZ7idmfXRFnWk', // Vervang met je eigen Spreadsheet ID
      range: 'Sheet1!B:B' // Vervang met het bereik van de kolom waarin de 'ja'/'nee'-waarden staan
    }).then(function(response) {
      var data = response.result.values;
      var rowCount = data.length;
  
      var noCount = 0;
      for (var i = 0; i < rowCount; i++) {
        if (data[i][0] === 'nee') {
          noCount++;
        }
      }
  
      var progressBar = document.querySelector('.progress-bar');
      if (noCount === 6) {
        progressBar.style.width = '100%';
        progressBar.style.backgroundColor = 'green';
      } else {
        progressBar.style.width = (noCount / 6) * 100 + '%';
        progressBar.style.backgroundColor = '#ffcc00';
      }
    }, function(reason) {
      console.error('Error: ' + reason.result.error.message);
    });
  }
  
  // Initialisatie van de Google Sheets API
  gapi.load('client', function() {
    gapi.client.init({
      apiKey: 'AIzaSyDcpFXMiROdpf7cKUYoI8zh2F3-mJKZO_c' // Vervang met je eigen API-sleutel
    }).then(loadSheetsAPI);
  });
  
  