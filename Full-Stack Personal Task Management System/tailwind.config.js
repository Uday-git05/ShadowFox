module.exports = {
    content: [
        "./pages/*.{html,js}",
        "./index.html",
        "./js/*.js",
        "./components/*.html"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors
                primary: {
                    DEFAULT: "#2563EB", // blue-600
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    500: "#3B82F6", // blue-500
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                },
                // Secondary Colors
                secondary: {
                    DEFAULT: "#059669", // emerald-600
                    50: "#ECFDF5", // emerald-50
                    100: "#D1FAE5", // emerald-100
                    500: "#10B981", // emerald-500
                    600: "#059669", // emerald-600
                },
                // Accent Colors
                accent: {
                    DEFAULT: "#DC2626", // red-600
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                    500: "#EF4444", // red-500
                    600: "#DC2626", // red-600
                },
                // Background Colors
                background: "#FAFAFA", // gray-50
                surface: "#FFFFFF", // white
                // Text Colors
                text: {
                    primary: "#111827", // gray-900
                    secondary: "#6B7280", // gray-500
                },
                // Status Colors
                success: {
                    DEFAULT: "#10B981", // emerald-500
                    50: "#ECFDF5", // emerald-50
                    100: "#D1FAE5", // emerald-100
                },
                warning: {
                    DEFAULT: "#F59E0B", // amber-500
                    50: "#FFFBEB", // amber-50
                    100: "#FEF3C7", // amber-100
                },
                error: {
                    DEFAULT: "#EF4444", // red-500
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                },
                // Border Colors
                border: {
                    DEFAULT: "#E5E7EB", // gray-200
                    light: "#F3F4F6", // gray-100
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                inter: ['Inter', 'sans-serif'],
                jetbrains: ['JetBrains Mono', 'monospace'],
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            boxShadow: {
                'task': '0 1px 3px rgba(0, 0, 0, 0.1)',
                'modal': '0 4px 6px rgba(0, 0, 0, 0.1)',
                'elevated': '0 10px 15px rgba(0, 0, 0, 0.1)',
            },
            transitionDuration: {
                '150': '150ms',
                '300': '300ms',
            },
            transitionTimingFunction: {
                'ease-out': 'ease-out',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            borderRadius: {
                'lg': '0.5rem',
                'xl': '0.75rem',
            },
            animation: {
                'fade-in': 'fadeIn 150ms ease-out',
                'slide-up': 'slideUp 300ms ease-out',
                'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                pulseGentle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
            },
        },
    },
    plugins: [],
}