
// I LOVE YOU TypeScript!
module page {
	export class Resume {
		$page:jQuery;
		
		constructor() {
			// Create the page element
			this.$page = $("<div />").text("This is the PAGE!!!!");
		}
		
		appendTo($other):void {
			$other.empty().append(this.$page);
		}
	}
    
    export class Foo extends Resume {
        test():void {
            
        }
    }
	
	export class Section {
	}
}

$(function() {
	new page.Resume().appendTo($("body"));
});

// --------------------------------------------------
// jQuery 
// 
// The only reason for this section is to cause 
// TypeScript to compile without bleeding all over 
// the place
// --------------------------------------------------
interface jQuery {
    addClass(className: string): jQuery;
    append(el: HTMLElement): jQuery;
    attr(attrName: string): string;
    fadeIn(): jQuery;
    fadeOut(): jQuery;
    focus(): jQuery;
    html(): string;
    html(val: string): jQuery;
    removeClass(className: string): jQuery;
    show(): jQuery;
    text(newText:string): jQuery;
    text():string
    val(): string;
    val(value: string): jQuery;
}

declare var $: {
    (el: HTMLElement): jQuery;
    (selector: string): jQuery;
    (readyCallback: () => void ): jQuery;
};
