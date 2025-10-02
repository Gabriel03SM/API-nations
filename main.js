        function pesquisar() {
                    let = bandeiras = document.getElementById(`exibir_bandeiras`);
                    let country = document.getElementById('pesquisa').value;
                    let  URL = `https://restcountries.com/v3.1/name/${country}`;
            
                    fetch(URL)
                    .then(resp => resp.json())
                    .then(resp =>{

                        resp.forEach(pais => {
                            console.log(pais.name.common);
                            let flag = document.createElement('img');
                            flag.setAttribute(`src`, pais.flags.svg)

                            let nome = document.createElement('h3')
                            nome.innerText = pais.name.common

                            let ofc_name = document.createElement('h4')
                            ofc_name.innerText = pais.name.official

                            let card = document.createElement('div')
                            card.classList.add(`card`, `bg-black`);
                            card.style.backgroundColor = ``

                            let card_body = document.createElement('div')
                            card_body.classList.add(`card_body`)

                            let col = document.createElement('div')
                            col.classList.add('col-3')

                            let map = document.createElement('a')
                            map.setAttribute(`href`, pais.maps.openStreetMaps )
                            map.innerText = 'Mapa Open Street'

                            card.appendChild(flag);
                            card_body.appendChild(map)
                            card_body.appendChild(ofc_name)
                            card_body.appendChild(nome)
                            card.appendChild(card_body);
                            col.appendChild(card)
                            bandeiras.appendChild(col)

                            console.log(pais)
                        });


                    })
                    .catch(_ => {console.log(_)})   //captura um erro inesperado
                    .finally(()=> {console.log('requisicao finalizada');})
            
        }
