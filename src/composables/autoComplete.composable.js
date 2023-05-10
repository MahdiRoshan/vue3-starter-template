import {ref, computed } from "vue";

export default function useSelectData(names){
    /** Variables */
    const searchQuery = ref('');
    const selectedItems = ref([]);

    /** Functions */
    const filteredOptions = computed(() => {
        return names.filter(option =>
            option.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const selectOption = option => {
        if (!selectedItems.value.includes(option)) {
            selectedItems.value.push(option);
        }
        searchQuery.value = '';
    };

    const addOption = (text) =>{
        if (!selectedItems.value.includes(text)) {
            selectedItems.value.push({id:Math.floor(Math.random() * 9999) + 1 , name:text});
        }
        searchQuery.value = '';
    }

    const removeItem = item => {
        const index = selectedItems.value.indexOf(item);
        if (index !== -1) {
            selectedItems.value.splice(index, 1);
        }
    };


    return {
        searchQuery,
        selectedItems,
        filteredOptions,
        selectOption,
        addOption,
        removeItem
    }
}
