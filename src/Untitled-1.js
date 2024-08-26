//step 1: create context
export const themeContext = createContext(null);

// step 2: enclose whole app in the provider and give an default value

// step 2.1: create an state variable to pass data to the provider
const [theme, setTheme] = useState("dark");


<themeContext.Provider value={theme}>
    <Header />
</themeContext.Provider>


// step 3: use the context value in the component
const theme = useContext(themeContext);
