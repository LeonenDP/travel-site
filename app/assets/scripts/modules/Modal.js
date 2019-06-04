import $ from 'jquery';

class Modal {
    constructor() {
        // Target the button that opens the modal
        this.openModalButton = $(".open-modal");
        // Target the modal
        this.modal = $(".modal");
        // Target the X button that closes the modal
        this.closeModalButton = $(".modal__close");
        this.events();
    };

    events() {
        // Clicking the modal open button
        this.openModalButton.click(this.openModal.bind(this));

        // Clicking the X button to close modal
        this.closeModalButton.click(this.closeModal.bind(this));

        // Pushing the esc key
        $(document).keyup(this.keyPressHandler.bind(this));
    };

    keyPressHandler(e){
        if (e.keyCode == 27){
            this.closeModal()
        }

    };

    openModal() {
        this.modal.addClass('modal--is-visible');

        // The return false is for preventing the link button to jumping to top of page.
        return false;
    };

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    };
}

export default Modal;
