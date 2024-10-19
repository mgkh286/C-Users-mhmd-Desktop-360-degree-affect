document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const roomImage = document.getElementById('roomImage');
    let imageInterval;
    let currentRoom = 'dining-room';

    const roomImages = {
        'dining-room': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ],
        'living-room': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ],
        'kitchen': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ],
        'office': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ],
        'bed-room': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ],
        'waiting-hall': [
            'https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjByZW5kZXJpbmd8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D'
        ]
    };

    function updateRoom(room) {
        if (currentRoom === room) return;

        currentRoom = room;
        clearInterval(imageInterval);

        let images = roomImages[room];
        let currentIndex = 0;

        roomImage.src = images[currentIndex];
        imageInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            roomImage.src = images[currentIndex];
        }, 2000);
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const room = this.getAttribute('data-room');
            updateRoom(room);
        });
    });

    updateRoom(currentRoom); // Initialize first room
});
