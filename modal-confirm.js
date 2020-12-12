function confirmModal(config){

    const labelOk  = config.labelOK || 'OK';
    const labelCancel  = config.labelCancel || 'Cancelar';

    const template = `<div class="confirm-modal-mask">
                        <div class="confirm-modal">
  						    <div class="confirm-body">${config.message}</div>
                            <div class="confirm-action">
                    			<button data-type="ok" class="confirm-button">${labelOk}</button>
                                <button data-type="cancel" class="confirm-button ">${labelCancel}</button>
                            </div>
                        </div>
                    </div>`;    
                    

    document.querySelector('body').insertAdjacentHTML('afterend', template);

    const parentModal = document.querySelector('.confirm-modal');
    const resetModal = () =>  document.querySelector('.confirm-modal-mask').remove();

    const confirmButtons = parentModal.querySelectorAll('.confirm-button');

    confirmButtons.forEach( button => {

            button.addEventListener('click', (e) => {
                e.preventDefault();
                const type = button.dataset.type;

                if(typeof config[type] == 'function') {
                    config[type]();  
                    resetModal();
                }
              
            });
     });

}