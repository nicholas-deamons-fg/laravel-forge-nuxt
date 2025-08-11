    // useFetchData.js
    import { ref, onMounted } from 'vue';

    export function useFetchData(url, headerData) {
      const data = ref(null);
      const error = ref(null);
      const loading = ref(true);

      const fetchData = async () => {
        loading.value = true;
        error.value = null;
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              ...headerData,
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          data.value = await response.json();
        } catch (err) {
          error.value = err;
        } finally {
          loading.value = false;
        }
      };

      //onMounted(() => {
        fetchData();
      //});

      return { data, error, loading, fetchData };
    }