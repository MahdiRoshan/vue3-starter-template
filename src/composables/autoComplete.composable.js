import {ref, computed , getCurrentInstance  } from "vue";


export default function useSelectData(names ,bindValue, modelValue){
    /** Variables */
    const searchQuery = ref('');
    const selectedItems = ref([]);
    const instance = getCurrentInstance();
    /** Functions */
    const filteredOptions = computed(() => {
        return names.filter(option =>
            option[bindValue].toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

    const selectOption = option => {
        if (!selectedItems.value.includes(option)) {
            selectedItems.value.push(option);
            instance.emit('update:modelValue' , [...modelValue , ...selectedItems.value]);
        }
        searchQuery.value = '';
    };

    const addOption = (text) =>{
        if (!selectedItems.value.includes(text)) {
            selectedItems.value.push({id:Math.floor(Math.random() * 9999) + 1 , bindValue:text});
            instance.emit('update:modelValue' , [...modelValue , ...selectedItems.value]);
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
