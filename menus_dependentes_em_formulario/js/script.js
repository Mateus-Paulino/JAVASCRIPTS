const ufSelect = document.getElementById('uf');

const cidadeSelect = document.getElementById('cidade');

const formInput = document.getElementById('codigo-cidade');

fetch('https://servicosdados.ibge.gov.br/api/v1/localidade/estado?orderBy=nome')
.then(response => response.json())
.then(estados =>{
    ufSelect.innerHTML = '<option value="">Selecione um Estado</option>'

    estados.forEach(estados => {
        const option = document.createElement('option');

            option.value = estado.sigla;

            option.setAttribute('data-id', estado.id);

            option.textContent = estado.nome;

            ufSelect.appendChild(option);
        });
});

ufSelect.addEventListener('change', function(){
    const selectedUF = this.value;

    const estadoId = this.selectedOptions[0].getAttribute('data-id');

    cidadeSelect.innerHTML = '<option value="">Carregando cidades...</option>';

    cidadeSelect.disabled = true;

    codigoInput.value = '';
    codigoInput.disabled = true;

    if (!selectedUF) return;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidade/estados/${estadoId}/municipios`)
        .then(response => response.json())
        .then(cidades => {
            cidadeSelect.innerHTML = '<option value="">Selecione a cidade...';

            cidades.forEach(cidades => {
                const option = document.createElement('option');

                option.value = cidade.nome;

                option.setAttribute('data-id', cidade.id);

                option.textContent = cidade.nome;

                cidadeSelect.appendChild('option');
            });

            cidadeSelect.disabled = false;
        });
});       

cidadeSelect.addEventListener('change', function() {
    const selectedOption = this.selectedOption[0];

    const codigoIBGE = selectedOption.getAttribute('data-id');

    if (codigoIBGE) {
        codigoInput.value = codigoIBGE;
        codigoInput.disabled = false;
    } else {
        codigoInput.value = '';
        codigoInput.disable = true;
    }
});