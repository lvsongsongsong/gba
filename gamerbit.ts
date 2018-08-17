/**
 * The pins used by SparkFun gamer:bit
 */
//%
enum GamerBitPin {
    //% block="P12 (D-PAD up)"
    P12 = <number>DAL.MICROBIT_ID_IO_P12,
    //% block="P12 (D-PAD left)"
    P13 = DAL.MICROBIT_ID_IO_P13,
    //% block="P14 (D-PAD right)"
    P14 = DAL.MICROBIT_ID_IO_P14,
    //% block="P15 (D-PAD down)"
    P15 = DAL.MICROBIT_ID_IO_P15,
}

/**
 * The event raised by the SparkFun gamer:bit pins
 */
//%
enum GamerBitEvent {
    //% block="down"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="up"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions to operate the SparkFun gamer:bit
 */
//% color=#f44242 icon="\uf11b"
namespace gamerbit {
	/**
	 * 
	 */
    //% shim=gamerbit::init
    function init(): void {
        return;
    }

	/**
	 * Determines if a button is pressed
	 * @param button the pin that acts as a button
	 */
    //% weight=89
    //% blockId=gamerbit_ispressed block="gamer:bit %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function isPressed(button: GamerBitPin): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>button) == 0;
    }

	/**
	 * Registers code to run when a gamer:bit event is detected.
	 */
    //% weight=90
    //% blockId=gamerbit_onevent block="gamer:bit on %button|%event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: GamerBitPin, event: GamerBitEvent, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler); // register handler
    }
}
