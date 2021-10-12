const btnHitung = document.getElementById('btnHitung')
const btnReset  = document.getElementById('btnReset')
const tableBody = document.getElementsByTagName('tbody')[0]
const tableFoot = document.getElementsByTagName('tfoot')[0]

btnHitung.addEventListener('click', () => {

  const hargaPerolehan      = Number(document.getElementById('hargaPerolehan').value)
  const nilaiSisa           = Number(document.getElementById('nilaiSisa').value)
  const taksiranUmurKegunaan= Number(document.getElementById('taksiranUmurKegunaan').value)

  const toNumberFormat = (num) => new Intl.NumberFormat().format(num)
  
  tableBody.innerHTML += 
  `
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>${toNumberFormat(hargaPerolehan)}</td>
  </tr>
  `

  let biayaPenyusutan       = (hargaPerolehan - nilaiSisa) / taksiranUmurKegunaan
  let totalBiayaPenyusutan  = biayaPenyusutan * taksiranUmurKegunaan;
  let akumulasiPenyusutan   = 0; 
  let nilaiBuku             = hargaPerolehan; 

  for ( let u = 1; u <= taksiranUmurKegunaan; u++ ) {

    akumulasiPenyusutan += biayaPenyusutan
    nilaiBuku           -= biayaPenyusutan

    tableBody.innerHTML += 
    `
    <tr>
      <td>${u}</td>
      <td>${toNumberFormat(biayaPenyusutan)}</td>
      <td>${toNumberFormat(akumulasiPenyusutan)}</td>
      <td>${toNumberFormat(nilaiBuku)}</td>
    </tr>
    `
    
  }
  
  tableFoot.innerHTML = 
  `
  <tr>
    <th></th>
    <th>Rp. ${toNumberFormat(totalBiayaPenyusutan)}</th>
    <th></th>
    <th></th>
  </tr>
  `
})

btnReset.addEventListener('click', () => {
  document.getElementById('hargaPerolehan').value = ''
  document.getElementById('nilaiSisa').value = ''
  document.getElementById('taksiranUmurKegunaan').value = ''

  tableBody.innerHTML = ''
  tableFoot.innerHTML = 
  `
  <tr>
    <th></th>
    <th>Rp. </th>
    <th></th>
    <th></th>
  </tr>
  `
})