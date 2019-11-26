import { h, Host } from "@stencil/core";
import { UP, DOWN, TAB, ENTER, ESCAPE, HOME, END, SPACE } from "../../utils/keys";
import { getElementDir, getElementTheme, getElementProp } from "../../utils/dom";
import { guid } from "../../utils/guid";
export class CalciteDropdownItem {
    constructor() {
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.dropdownItemId = `calcite-dropdown-item-${guid()}`;
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "single");
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            position: this.itemPosition
        });
    }
    render() {
        const dir = getElementDir(this.el);
        const theme = getElementTheme(this.el);
        const scale = getElementProp(this.el, "scale", "m");
        if (!this.href) {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active ? "true" : "false" },
                h("slot", null)));
        }
        else {
            return (h(Host, { theme: theme, dir: dir, scale: scale, tabindex: "0", role: "menuitem", "aria-selected": this.active ? "true" : "false", isLink: true },
                h("a", { href: this.href, title: this.linkTitle },
                    h("slot", null))));
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    onMouseover(e) {
        this.calciteDropdownItemMouseover.emit(e);
    }
    keyDownHandler(e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem();
                if (e.path && e.path[0].nodeName === "A")
                    e.click();
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
        e.preventDefault();
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup
        });
        this.closeCalciteDropdown.emit();
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    static get is() { return "calcite-dropdown-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-dropdown-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-dropdown-item.css"]
    }; }
    static get properties() { return {
        "active": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "pass an optional href to render an anchor around the link items"
            },
            "attribute": "href",
            "reflect": false
        },
        "linkTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "pass an optional title for rendered href"
            },
            "attribute": "link-title",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "calciteDropdownItemKeyEvent",
            "name": "calciteDropdownItemKeyEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "calciteDropdownItemMouseover",
            "name": "calciteDropdownItemMouseover",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "calciteDropdownItemSelected",
            "name": "calciteDropdownItemSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "closeCalciteDropdown",
            "name": "closeCalciteDropdown",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "registerCalciteDropdownItem",
            "name": "registerCalciteDropdownItem",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "mouseover",
            "method": "onMouseover",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "keydown",
            "method": "keyDownHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "registerCalciteDropdownGroup",
            "method": "registerCalciteDropdownGroup",
            "target": "parent",
            "capture": false,
            "passive": false
        }, {
            "name": "calciteDropdownItemHasChanged",
            "method": "updateActiveItemOnChange",
            "target": "parent",
            "capture": false,
            "passive": false
        }]; }
}