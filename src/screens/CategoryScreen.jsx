import { StyleSheet, View } from 'react-native';
import CategoryItemCard from '../components/CategoryItemCard';
import { getCategoryItems } from '../data/data';

export default function CategoryScreen({
    route,
    navigation,
}) {
    navigation.setOptions({
        title: route.params?.categoryTitle
    });
    const categoryId = route.params?.categoryId || 'cat-1'; // Example category ID, replace with actual logic if needed
    const categoryItems = getCategoryItems(categoryId);

    return (
        <View style={styles.container}>
            {categoryItems.map(item => (
                <CategoryItemCard
                    key={item.id}
                    {...item}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
});
