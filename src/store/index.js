import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                  id: 'm1',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
                  title: 'Carnaval',
                  description: 'A volta do carnaval em 2022 foi ...',
                },
                {
                  id: 'm2',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
                  title: 'Dia das mulheres',
                  description: 'Foi uma oportunidade para ...',
                },
                {
                  id: 'm3',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
                  title: 'Festa Junina',
                  description: 'Essas comidas tipicas, ...',
                },
            ]
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
          return (memoryId) => {
            return state.memories.find((memory) => memory.id === memoryId);
          }
        }
    }
})

export default store;