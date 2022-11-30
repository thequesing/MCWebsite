// Clipboard
var clipboard = new ClipboardJS('#mcstatus');

// Console
console.log("Website started!!")

// Minecraft Join
function  mcstatus() {
  Swal.fire({
  title: '¡Ip Copiada!',
  text: 'Ya puedes  acceder al servidor de minecraft!',
  icon: 'success',
  confirmButtonText: 'Vale :)'
});
}

// Minecraft Status
$.getJSON(`https://api.minetools.eu/ping/mc.hypixel.net/25565`, function (data) {
    
            if (data.error === undefined) {
                document.getElementById('minecraft-count').textContent = data.players.online;
            } else {
    
            }
        });

// Discord Status
$.getJSON(`https://discord.com/api/guilds/998651654427652226/widget.json`, function (data) {
    
            if (data.error === undefined) {
                document.getElementById('discord-count').textContent = data.presence_count;
            } else {
    
            }
        });