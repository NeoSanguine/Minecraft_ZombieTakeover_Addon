const system = server.registerSystem(0, 0);

system.initialize = function()
{
    if (system != null) {
        let chatEvent = system.createEventData("minecraft:display_chat_event");
        chatEvent.data.message = "Server System is setup.";
        system.broadcastEvent("minecraft:display_chat_event", chatEvent);
    }
}

system.listenForEvent("minecraft:player_attacked_entity", function (eventData) {
    let player = eventData.data.player;

    let health = system.getComponent(player, "minecraft:health");

    if (health != null) {
        health.value = health.max;
    }
    else {
        
    }
    

});

