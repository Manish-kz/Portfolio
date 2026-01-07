const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gradient">MK</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">Cloud Engineer</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Manish Khadka. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
