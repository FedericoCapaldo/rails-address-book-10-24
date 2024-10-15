import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contacts-list"
export default class extends Controller {
  static targets = ["contact"]

  connect() {
    console.log(this.contactTargets)
  }

  highlight(event) {
    this.contactTargets.forEach((contact) => {
      contact.classList.remove('active')
    })
    event.currentTarget.classList.add('active')
  }
}
