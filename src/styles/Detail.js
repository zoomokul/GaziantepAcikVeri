import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5', // Example background color
  },
  loadingIndicator: {
    marginTop: 16,
  },
  cardContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Example border color
    borderRadius: 8,
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  noDataText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
