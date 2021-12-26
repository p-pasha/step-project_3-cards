import Element from "./element.js"

class CardBody extends Element {
    constructor() {
        super()
        this.renderСardBody()
    }

    renderСardBody() {
        this.div = this.createElement("div", ["card-body"], "Insert your filter and cards")
        document.querySelector(".main-container").prepend(this.div)
    }
}
export default CardBody