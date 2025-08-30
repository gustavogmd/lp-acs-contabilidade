import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-soft hover:shadow-elegant",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // ACS Custom Variants
        hero: "gradient-hero text-white shadow-elegant hover:shadow-gold hover:scale-105 font-semibold transition-all duration-300",
        gold: "gradient-gold text-primary shadow-gold hover:bg-gold-dark hover:scale-105 font-semibold",
        glass: "glass text-primary border-primary/20 hover:bg-primary/10 backdrop-blur-lg",
        cta: "bg-gold text-primary hover:bg-gold-dark shadow-gold hover:shadow-elegant hover:scale-105 font-bold text-lg px-8 py-4",
        yellow: "bg-gold text-primary hover:bg-gold-dark shadow-gold hover:shadow-elegant hover:scale-105 font-semibold"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { buttonVariants }
export type ButtonVariants = VariantProps<typeof buttonVariants>