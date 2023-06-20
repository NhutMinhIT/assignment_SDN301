import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import categories from '../category';

const FilterCategory = ({ onCheckFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategorySelection = (categoryId) => {
        setSelectedCategory(categoryId);
        onCheckFilter(categoryId);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.categoryButton,
                    selectedCategory === 'All' && styles.selectedCategoryButton,
                ]}
                onPress={() => handleCategorySelection('All')}
            >
                <Text
                    style={[
                        styles.categoryButtonText,
                        selectedCategory === 'All' && styles.selectedCategoryButtonText,
                    ]}
                >
                    All
                </Text>
            </TouchableOpacity>

            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        styles.categoryButton,
                        selectedCategory === category.id && styles.selectedCategoryButton,
                    ]}
                    onPress={() => handleCategorySelection(category.id)}
                >
                    <Text
                        style={[
                            styles.categoryButtonText,
                            selectedCategory === category.id && styles.selectedCategoryButtonText,
                        ]}
                    >
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        padding: 20
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 20,
        backgroundColor: '#f7eba8',
    },
    categoryButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    selectedCategoryButton: {
        backgroundColor: '#faa41a',
    },
    selectedCategoryButtonText: {
        color: 'white',
    },
});

export default FilterCategory;
