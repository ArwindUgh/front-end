import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[#1B0033] text-white'
            : 'bg-gradient-to-r from-[#0B0033] via-[#8A045C] to-[#003366]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
