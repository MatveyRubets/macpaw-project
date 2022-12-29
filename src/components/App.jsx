import styles from "./index.module.scss";

import HomeNav from "./HomeNav/HomeNav";

function App() {
	return (
		<div className={styles.container}>
			<img src="src/assets/icons/Logo.svg" alt="" />
			<HomeNav />
		</div>
	);
}

export default App;
