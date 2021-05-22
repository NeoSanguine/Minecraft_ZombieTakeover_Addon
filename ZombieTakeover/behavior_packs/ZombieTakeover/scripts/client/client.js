const clientSystem = client.registerSystem(0, 0);
let firstTick = true;
let playerHotbar = null;

// Setup which evetns to listen for

clientSystem.initialize = function () {
    // setup up your listenToEvents and register client-side components here
    client.log("Log Message");

    if (clientSystem != null) {
        let chatEvent = clientSystem.createEventData("minecraft:display_chat_event");
        chatEvent.data.message = "Client System is setup.";
        clientSystem.broadcastEvent("minecraft:display_chat_event", chatEvent);
    }
};



// per tick update function
clientSystem.update = function () {
    if (firstTick == false) {
        firstTick = true;
    }

    // any logic that needs to happen every tick on the client
    if (firstTick) {
        firstTick = false;

        // get the first item in the player's inventory
        
    }
};

clientSystem.listenForEvent("minecraft:client_entered_world", function (eventData) {
    let chatEvent = clientSystem.createEventData("minecraft:display_chat_event");
    chatEvent.data.message = "Welcome!";
    clientSystem.broadcastEvent("minecraft:display_chat_event", chatEvent);
});


