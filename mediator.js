class Mediator {

    constructor() {
        this.channels = {};
    }

    subscribe(channel, fn){
        
        // Create channel if doesn't exist
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        
        // Add new subscription
        this.channels[channel].push({
            context: this,
            callback: fn
        });

        return this;
    }

    publish(channel){

        // If channel doesn't exist stop here
        if (!this.channels[channel]) {
            return;
        }

        // TODO: Pass through args as second param instead of pulling out of "arguments"?
        var args = Array.prototype.slice.call(arguments, 1),
            cl = this.channels[channel].length;

        // Execute each subscription callback
        for (var i = 0, l = cl; i < l; i++) {
            var subscription = this.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }

        return this;
    }

    installTo(obj) {
        obj.subscribe = subscribe;
        obj.publish = publish;
    }
}
