class ProgressSteps {

    constructor() {
        this.progress = document.getElementById('progress');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.submitBtn = document.getElementById('submitBtn');


        this.steps = document.querySelectorAll('.step');

        this.formContainer = document.getElementById('Form-Container');

        this.currentStep = 1;

        this.forms = [ 
            this.createFormStep(1, 'Informações Básicas',[
                { type: 'text', id: 'name', label: 'Nome Completo', required: true },
                { type: 'email', id: 'email', label: 'E-mail', required: true },
                { type: 'tel', id: 'phone', label: 'Telefone' }
            ]),

                this.createFormStep(2, 'Detalhes Pessoais',[
                { type: 'date', id: 'birthdate', label: 'Data de Nascimento', required: true },
                { type: 'select', id: 'gender', label: 'Gênero', options: ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar']},
                { type: 'textarea', id: 'bio', label: 'Breve biografia', rows: 3  }
            ]),

                this.createFormStep(3, 'Configurações',[
                { type: 'text', id: 'username', label: 'Nome de Usuário', required: true },
                { type: 'password', id: 'passsword', label: 'Senha', required: true},
                { type: 'password', id: 'confirm-password', label: 'Confirmar senha', required: true }
            ]),

                this.createFormStep(4, 'Confirmação',[
                { type: 'checkbox', id: 'terms', label: 'Eu li e aceito os termos de serviço', required: true },
                { type: 'checkbox', id: 'newsletter', label: 'Desejo receber notificações e promoções', required: true},
            ]),
        ];
        
        this.init();
    }

    init() {
        this.renderCurrentForm();
        this.addEventListeners();
        this.update();
    }

    addEventListeners() {
        this.prevBtn.addEventListeners('click', () => this.prevBtn());
        this.nextBtn.addEventListeners('click', () => this.nextBtn());
        this.submitBtn.addEventListeners('click', () => this.submitForm());
    }

    createFormStep(stepNumber, title, fields) {
        
    }
}





document.addEventListener('DOMContentLoaded', () => {
    new ProgressSteps();
});