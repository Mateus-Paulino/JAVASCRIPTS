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
        const form = document.createElement('div');
        
        form.className = `form-step step-${stepNumber}`;

        if (stepNumber === 1) form.classList.add('active');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        titleElement.className = 'form-title';

        form.appendChild(titleElement)

        fields.forEach(field => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.textContent = field.label;

            if (field.required) {
                label.innerHTML += 'span class="requireed">*</span';
            }

            let input;

            if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.id = field.id;
                input.name = field.id;
                input.rows = field.rows || 3;
            } else if (field.type === 'select') {
                input = document.createElement('select');
                input.id = field.id;
                input.name =field.name;

                field.options.forEach(option => {
                    const optionElement = document.createElement('option');

                    optionElement.value = option.toLowerCase().replase(/\s+/g, '-');
                    optionElement.textContent = option;

                    input.appendChild(optionElement);
                });
            } else if(field.type === 'checkbox') {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'checkbox-container';

                input = document.createElement('input');
                input.type = 'checkbox';
                input.id = field.id;
                input.name = field.id;

                if (input.required) input.required = true;

                label.htmlFor = field.id;
                label.className = 'checkbox-label';
                label.textContent = field.label;

                checkboxContainer.appendChild(input);
                checkboxContainer.appendChild(label);

                formGroup.appendChild(checkboxContainer);
            } else {
                input = document.createElement('input'); 
                input.type = field.type;
                input.id = field.id;
                input.name = field.id;

                formGroup.appendChild(label); 
            }

            if (field.type !== 'checkbox') {
                if (field.required) input.required = true;
                formGroup.appendChild(input);
            }

            form.appendChild(formGroup);
        });

        return form
    }

    renderCurrentForm() {
        this.formContainer.innerHTML = '';

        this.forms.forEach((form, index) => {
            form.classList.remove('active');

            if (index = 1 === this.currentStep) {
                form.classList.add('active');
            }

            this.formContainer.appendChild(form);
        });
        
    }

    nextStep() {
        if (this.validateCurrentStep()) {

            this.currentStep++;

            if (this.currentStep > this.steps.length) {
                this.currentStep = this.steps.length;
            }

            this.update();
        }
    }
    prevStep() {
        this.currentStep--;

        if (this.currentStep < 1) {
            this.currentStep = 1;
        }

        this.update();
    }

    validateCurrentStep() {
        const currentForm = this.forms[this.currentStep - 1];

        let isValid = true;

        const requiredFields = currentForm.querySelectorAll('required');
        
        requiredFields.forEach(field => {
            field.classList.remove('error');

            if (field.type ==='checkbox') {

                const container = field.closest('.checkbox-container');

                if (container) container.classList.remove('error');
            }

            if (field.type === 'checkbox') {
                if (!field.checked) {
                    field.classList.add('error');

                    const container = field.closest('.checkbox-container');

                    if (container) container.classList.add('error');
                    isValid = false;
                }
            } else if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            }

            if (field.id === 'confirm-password' && this.currentStep === 3) {
                const password = currentForm.querySelectorAll('#password').value;

                if (field.value !== password) {
                    field.classList.add('error');
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            alert('Por favor,preencha todos os campos obrigatórios corretamente.');
        }

        return isValid;
    }

    submitForm() {
        if (this.validateCurrentStep()) {
            alert('Formulário enviado com sucesso!');

            this.currentStep = 1;
            this.update();

            this.forms.forEach(form => {
                const inputs = form.querySelectorAll('input, select, textarea');

                inputs.forEach(input => {
                    if (input.type !== 'checkbox') {
                        input.value = '';
                    }else {
                        input.checked = false;
                    }
                });
            });
    }

    update() {
        this.steps.forEach((step, index) => {
            if (index < this.currentStep) {
                step.classList.add('active');
                step.classList.add('completed');
            } else {
                step.classList.remove('active');
                step.classList.remove('completed');
            }
        });

        const progressPercentage = ((this.currentStep - 1) / (this.steps.length -1) * 100);

        this.progress.style.width = `${progressPercentage}%`;

        this.prevBtn.style.display = this.currentStep === 1;

        if (this.currentStep === this.steps.length) {
            this.nextBtn.style.display = 'none';
            this.submitBtn.style.display = 'flex';
        } else {
            this.nextBtn.style.display = 'flex';
            this.submitBtn.style.display = 'nonee';
        }
        
        this.renderCurrentForm();
    }
}



document.addEventListener('DOMContentLoaded', () => {
    new ProgressSteps();
});