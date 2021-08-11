
const sortBarStyles = {
    control: (base, state) => ({
      ...base,
      background: "#316FBE",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#76711A" : "#316FBE",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#76711A" : "#316FBE"
      },
    }),
};
 
 
export default sortBarStyles;