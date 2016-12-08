import $ from 'jquery';

class Modal {
constructor(){
  this.modal = $('.modal');
  this.closeModalButton = $('.modal__close');
  this.openModalButton = $('.open-modal');
  this.events();
}

events(){
  this.openModalButton.click(this.displayModal.bind(this))
  this.closeModalButton.click(this.closeModal.bind(this))
  //user presses any key//
  $(document).keyup(this.keyPressHandler.bind(this));
}
keyPressHandler(e){
  if(e.keyCode == 27){
    this.closeModal();
  }
}
displayModal(){
  this.modal.addClass('modal--is-visible');
  return false;
}
closeModal(){
  this.modal.removeClass('modal--is-visible');

}
}

export default Modal;
