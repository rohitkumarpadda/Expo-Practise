import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
	return (
		<View style={styles.container}>
			<Link href='/' style={styles.text}>
				Go to Home Screen!
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 20,
		textDecorationLine: 'underline',
	},
});
