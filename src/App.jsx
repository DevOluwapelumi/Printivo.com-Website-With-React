import "./App.css";

const App = () => {
  return (
    <>
      <div className="home-nav-mobile">
        <div>
          <div className="c-backdrop c-backdrop--dark"></div>
        <div className="w-full mx-auto c-supportbar py-2 bg-cream-light text-blue-md">
          <div className="content-container mx-auto">
            <div className="h-12 w-full flex justify-center">
              <div className="flex justify-between w-full items-center">
                <div className="c-nav__links hidden md:flex md:w-1/2 justify-start items-center">
                  <a className="mr-12 no-underline">Cost Calculator</a>
                  <a className="mr-12 no-underline">Discover Stores</a>
                  <a className="no-underline">Track Orders</a>
                </div>
                <div className="flex justify-end items-center">
                  <div className="pl-1">
                    <span className="sm:inline hidden">Need help? Call: </span>
                    <span>
                      <a href="tel:234.809.108.4333" className="call-link">
                        +2347047142093
                      </a>
                    </span>
                  </div>
                </div>
                <div className="flex items-center pl-2">
                  <a
                    href="https://wa.me/2347047142093"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      src="data:image/svg+xml,%3Csvg width=&#x27;32&#x27; height=&#x27;32&#x27; viewBox=&#x27;0 0 32 32&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M8.838 26.921l.484.285a13.272 13.272 0 006.74 1.838h.005c7.3 0 13.24-5.912 13.242-13.178a13.068 13.068 0 00-3.875-9.324 13.187 13.187 0 00-9.362-3.865c-7.305 0-13.245 5.912-13.248 13.178a13.097 13.097 0 002.024 7.013l.315.498-1.338 4.863 5.013-1.308zM0 31.996l2.26-8.216a15.769 15.769 0 01-2.126-7.926C.137 7.112 7.284 0 16.067 0a15.869 15.869 0 0111.27 4.65A15.723 15.723 0 0132 15.867c-.004 8.741-7.152 15.855-15.933 15.855h-.006c-2.667-.001-5.287-.667-7.614-1.93L0 31.996z&#x27; fill=&#x27;%23fff&#x27;/%3E%3Cpath d=&#x27;M.683 15.862a15.223 15.223 0 002.054 7.652L.554 31.445l8.154-2.128a15.436 15.436 0 007.35 1.863h.007c8.477 0 15.377-6.867 15.38-15.306a15.176 15.176 0 00-4.5-10.828 15.32 15.32 0 00-10.88-4.49C7.586.557.686 7.423.682 15.863zM16.064 31.18z&#x27; fill=&#x27;url(%23paint0_linear)&#x27;/%3E%3Cpath d=&#x27;M.134 15.858a15.77 15.77 0 002.127 7.927L0 32l8.446-2.204a15.98 15.98 0 007.614 1.93h.007c8.78 0 15.929-7.114 15.933-15.855a15.722 15.722 0 00-4.663-11.217 15.87 15.87 0 00-11.27-4.65C7.284.004.137 7.116.134 15.858zm5.03 7.512l-.316-.498a13.098 13.098 0 01-2.024-7.013C2.826 8.593 8.767 2.682 16.072 2.682a13.188 13.188 0 019.362 3.864 13.068 13.068 0 013.875 9.323c-.003 7.267-5.943 13.179-13.242 13.179h-.006a13.274 13.274 0 01-6.74-1.837l-.484-.286-5.012 1.308 1.338-4.863zm10.903 8.356z&#x27; fill=&#x27;url(%23paint1_linear)&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M12.085 9.229c-.298-.66-.612-.673-.896-.685-.232-.01-.498-.01-.763-.01s-.697.1-1.061.497C9 9.427 7.97 10.386 7.97 12.335c0 1.95 1.427 3.834 1.626 4.099.199.264 2.754 4.393 6.8 5.982 3.363 1.32 4.047 1.057 4.777.99.73-.065 2.356-.957 2.687-1.883.332-.925.332-1.718.233-1.884-.1-.165-.365-.264-.764-.462-.398-.198-2.355-1.157-2.72-1.29-.365-.132-.63-.198-.896.2-.265.396-1.028 1.288-1.26 1.552-.232.265-.464.298-.863.1-.398-.199-1.68-.617-3.201-1.967-1.184-1.05-1.982-2.347-2.215-2.744-.232-.396-.025-.611.175-.809.179-.177.398-.462.597-.694.199-.231.265-.396.398-.66.133-.265.066-.497-.033-.695-.1-.198-.873-2.158-1.227-2.941&#x27; fill=&#x27;%23fff&#x27;/%3E%3Cdefs%3E%3ClinearGradient id=&#x27;paint0_linear&#x27; x1=&#x27;16&#x27; y1=&#x27;31.442&#x27; x2=&#x27;16&#x27; y2=&#x27;.554&#x27; gradientUnits=&#x27;userSpaceOnUse&#x27;%3E%3Cstop stop-color=&#x27;%2320B038&#x27;/%3E%3Cstop offset=&#x27;1&#x27; stop-color=&#x27;%2360D66A&#x27;/%3E%3C/linearGradient%3E%3ClinearGradient id=&#x27;paint1_linear&#x27; x1=&#x27;16&#x27; y1=&#x27;32.001&#x27; x2=&#x27;16&#x27; y2=&#x27;.005&#x27; gradientUnits=&#x27;userSpaceOnUse&#x27;%3E%3Cstop stop-color=&#x27;%23F9F9F9&#x27;/%3E%3Cstop offset=&#x27;1&#x27; stop-color=&#x27;%23fff&#x27;/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                      alt="contact us on +2348099561000"/>
                  </a>
                </div>
                <div className="c-country-select flex items-center">
                  <img
                    src="data:image/svg+xml,%3Csvg width=&#x27;16&#x27; height=&#x27;16&#x27; viewBox=&#x27;0 0 16 16&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M16 2.667H0v10.666h16V2.666z&#x27; fill=&#x27;%23F0F0F0&#x27;/%3E%3Cpath d=&#x27;M5.333 2.667H0v10.666h5.333V2.666zM16 2.667h-5.333v10.666H16V2.666z&#x27; fill=&#x27;%234A945A&#x27;/%3E%3C/svg%3E"
                    alt="nigerian flag"
                    className="inline-block mr-2"/>
                  <span>Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      <nav className="c-nav font-sf">
        <div className="inner-nav content-container mx-auto justify-between items-center flex">
          <div className="c-logo flex-shrink-0">
            <a className="active">
              <img
                src="data:image/svg+xml,%3Csvg width=&#x27;155&#x27; height=&#x27;40&#x27; viewBox=&#x27;0 0 155 40&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0)&#x27;%3E%3Cpath d=&#x27;M.206 40h6.73V29.175h.105c.344.511.805.933 1.345 1.23a5.264 5.264 0 001.865.93c.81.218 1.646.322 2.485.31a9.296 9.296 0 005.59-1.756 9.606 9.606 0 002.179-2.362c.725-.928 1.14-1.958 1.554-3.197.414-1.34.518-2.68.518-4.33s-.206-3.3-.725-4.64a9.21 9.21 0 00-1.966-3.401 7.671 7.671 0 00-2.909-2.267 9.188 9.188 0 00-3.416-.722 9.504 9.504 0 00-4.245.927 8.022 8.022 0 00-2.998 2.578h-.1l-.31-2.985H0c0 1.03.104 2.062.104 3.3.104 1.229.104 2.578.104 3.917V40H.206zm6.73-21.133v-.618c.105-.205.105-.412.207-.516.115-.66.361-1.289.725-1.851.38-.493.879-.883 1.45-1.134.62-.31 1.139-.517 1.864-.517a3.997 3.997 0 012.485.826 4.215 4.215 0 011.547 2.16c.343.996.522 2.04.529 3.094 0 1.12-.178 2.233-.53 3.298a4.744 4.744 0 01-1.655 2.061 3.997 3.997 0 01-2.485.826c-.725 0-1.235-.206-1.865-.413a7.125 7.125 0 01-1.345-1.134c-.31-.517-.621-1.031-.725-1.65-.104-.205-.104-.412-.207-.721v-3.71h.006zM26.818 31.24h6.835V19.382c0-.206.104-.516.104-.722a3.956 3.956 0 011.553-2.474c.824-.618 1.859-.927 3.106-.927h1.036c.206.103.518.103.829.205V9.072c-.31 0-.519-.104-.725-.104h-.725c-.519 0-1.14 0-1.656.206a4.99 4.99 0 00-1.656.825 4.828 4.828 0 00-1.45 1.444c-.519.516-.83 1.229-1.14 2.061h-.206l-.206-4.021h-5.803c-.014.654.02 1.309.104 1.958v19.798zm23.81 0V9.485h-6.83v21.752l6.83.002zm5.385 0h6.834V17.733c.006-.254.077-.503.207-.722.104-.412.414-.825.725-1.23.279-.414.675-.736 1.139-.926.414-.31.931-.413 1.554-.413.829 0 1.553.206 2.07.618a3.77 3.77 0 011.035 1.65c.31.72.415 1.546.415 2.473v12.063h6.73V18.351c0-1.649-.206-2.985-.62-4.123-.31-1.23-.932-2.165-1.554-2.986-.725-.721-1.554-1.34-2.485-1.649a7.954 7.954 0 00-3.106-.618 9.097 9.097 0 00-2.485.31c-.725.308-1.45.516-1.967.927-.526.32-1.013.7-1.45 1.134-.31.413-.62.825-.829 1.134h-.206l-.31-2.985h-5.902c.104.927.104 2.062.207 3.196v18.546l-.002.002zM82.82 5.465v4.021h-2.887v4.949h2.9v8.867a13.818 13.818 0 00.518 3.917c.26.946.721 1.825 1.353 2.576a7.7 7.7 0 002.175 1.34 9.155 9.155 0 002.998.517c.866-.014 1.73-.083 2.587-.208.725-.103 1.346-.205 1.764-.412V25.98a1.318 1.318 0 00-.62.103h-1.45c-.621 0-1.14-.103-1.555-.413-.414-.205-.724-.618-.828-1.229-.206-.52-.31-1.244-.31-2.172v-7.836h4.867V9.485h-4.866V3.609L82.84 5.465h-.02zm25.368 4.021l7.972 21.753h6.73l8.076-21.753h-7.133l-2.797 10.103c-.206.927-.414 1.756-.621 2.68a18.886 18.886 0 00-.516 2.569h-.207a22.846 22.846 0 00-.518-2.578c-.193-.905-.435-1.8-.725-2.68l-2.898-10.095H108.2l-.012.001zm35.722-.516c-1.764 0-3.417.206-4.762.825a9.802 9.802 0 00-3.727 2.27c-1.035 1.03-1.864 2.165-2.381 3.608a14.413 14.413 0 00-.829 4.845 12.81 12.81 0 00.829 4.64 11.028 11.028 0 002.381 3.512 10.238 10.238 0 003.624 2.269c1.346.516 2.9.721 4.452.721 1.139 0 2.381-.103 3.416-.412a12.445 12.445 0 003.21-1.34 10.308 10.308 0 002.485-2.269c.829-.927 1.346-2.062 1.764-3.3.435-1.372.647-2.804.628-4.242 0-1.65-.206-3.197-.829-4.536-.518-1.34-1.235-2.578-2.175-3.512a9.824 9.824 0 00-3.527-2.27c-1.346-.618-2.9-.825-4.556-.825l-.003.016zm-.207 4.845c.725 0 1.45.104 1.967.516.517.413 1.035.826 1.346 1.444.364.675.609 1.407.725 2.165a8.75 8.75 0 01.31 2.37c0 1.23-.206 2.475-.621 3.402a4.56 4.56 0 01-1.45 2.27c-.62.617-1.449.825-2.278.825a3.996 3.996 0 01-2.485-.826 5.435 5.435 0 01-1.45-2.37c-.415-.928-.519-2.062-.519-3.3.013-.794.082-1.586.207-2.37.206-.826.414-1.444.829-2.062a4.856 4.856 0 011.345-1.548 4.094 4.094 0 012.071-.516h.003z&#x27; fill=&#x27;%23000&#x27;/%3E%3Cpath d=&#x27;M98.468 9.588v5.36h6.936v-5.36h-6.936z&#x27; fill=&#x27;%2300AFEF&#x27;/%3E%3Cpath d=&#x27;M98.468 14.948v5.465h6.936v-5.465h-6.936z&#x27; fill=&#x27;%23EC268F&#x27;/%3E%3Cpath d=&#x27;M98.468 20.413v5.361h6.936v-5.361h-6.936z&#x27; fill=&#x27;%23FFF212&#x27;/%3E%3Cpath d=&#x27;M98.468 25.774v5.463h6.936v-5.463h-6.936zM101.988 0c-2.07 0-3.727 1.649-3.727 3.609a3.673 3.673 0 001.085 2.631 3.701 3.701 0 002.642 1.081c1.967 0 3.625-1.649 3.625-3.71a3.647 3.647 0 00-1.074-2.54A3.676 3.676 0 00101.988 0zM47.313 0c-2.07 0-3.727 1.649-3.727 3.609a3.674 3.674 0 001.085 2.631 3.705 3.705 0 002.642 1.081c1.967 0 3.625-1.649 3.625-3.71a3.644 3.644 0 00-1.074-2.54A3.676 3.676 0 0047.314 0z&#x27; fill=&#x27;%23000&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0&#x27;%3E%3Crect width=&#x27;155&#x27; height=&#x27;40&#x27; fill=&#x27;%23fff&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                alt="Printivo logo"/>
            </a>
          </div>
          <div className="nav-items flex">
            <ul className="c-nav__links flex mr-6 main-nav-list">
              <li className="c-nav__listitem mr-6">
                <a className="nav-link no-underline" href="all-products.html">
                  All Products
                </a>
              </li>
              <a className="no-underline nav-link mr-6" href="reseller.html">
                Become a Reseller
              </a>
              <a className="no-underline nav-link mr-6">Merch Store</a>
              <a className="no-underline nav-link mr-6">Marketplace</a>
            </ul>
            <div className="c-nav__userarea flex items-center">
              <div className="c-logged">
                <div className="c-logged__out flex">
                  <button type="button" className="mr-6 text-red-light font-sf">
                    Sign in
                  </button>
                  <a className="no-underline nav-link mr-6">Create Account</a>
                </div>
              </div>
              <div className="flex items-center">
                <a className="c-cart__icon flex-shrink-0 relative">
                  <img
                    src="data:image/svg+xml,%3Csvg width=&#x27;32&#x27; height=&#x27;32&#x27; viewBox=&#x27;0 0 32 32&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M28.2202 10.7466L25.3669 19.76C25.1536 20.4 24.5936 20.8267 23.9269 20.8267H12.9136C12.2736 20.8267 11.6602 20.4266 11.4469 19.8399L7.26024 8.55999H4.8069C4.22023 8.55999 3.74023 8.08 3.74023 7.49333C3.74023 6.90666 4.22023 6.42666 4.8069 6.42666H7.98023C8.43357 6.42666 8.83357 6.71998 8.99357 7.14665L13.3402 18.6666H23.4736L25.7402 11.4666H13.1802C12.5936 11.4666 12.1136 10.9866 12.1136 10.4C12.1136 9.8133 12.5936 9.3333 13.1802 9.3333H27.2069C27.5536 9.3333 27.8736 9.51996 28.0602 9.78662C28.2736 10.0533 28.3269 10.4266 28.2202 10.7466ZM13.4469 22.2133C12.9936 22.2133 12.5402 22.4 12.2202 22.72C11.9002 23.04 11.7136 23.4933 11.7136 23.9466C11.7136 24.4 11.9002 24.8533 12.2202 25.1733C12.5402 25.4933 12.9936 25.68 13.4469 25.68C13.9002 25.68 14.3536 25.4933 14.6736 25.1733C14.9936 24.8533 15.1802 24.4 15.1802 23.9466C15.1802 23.4933 14.9936 23.04 14.6736 22.72C14.3536 22.4 13.9002 22.2133 13.4469 22.2133ZM23.0202 22.2133C22.5669 22.2133 22.1136 22.4 21.7936 22.72C21.4736 23.04 21.2869 23.4933 21.2869 23.9466C21.2869 24.4 21.4736 24.8533 21.7936 25.1733C22.1136 25.4933 22.5669 25.68 23.0202 25.68C23.4736 25.68 23.9269 25.4933 24.2469 25.1733C24.5669 24.8533 24.7536 24.4 24.7536 23.9466C24.7536 23.4933 24.5669 23.04 24.2469 22.72C23.9269 22.4 23.4736 22.2133 23.0202 22.2133Z&#x27; fill=&#x27;%23384A62&#x27;/%3E%3C/svg%3E%0A"
                    alt="cart"
                  />
                </a>
                  </div>
            </div>
          </div>
        </div>
   </nav>
     
        {/* <div id="page">
          <div className="c-landing">
          </div>
          </div> */}


              <div className="c-products-preview content-container mx-auto py-14">
              <div className="c-preview__header flex align-center justify-between">
                <h3 className="font-dm sm:text-3xl text-xl">Popular Products</h3>
                <a className="font-sf sm:text-base text-sm">See All Products</a>
              </div>
              <div className="c-preview__main mt-6">
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 1.PNG"
                      alt="Two-sided Business Cards"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Two-sided Business Cards</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦9,700
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG">
                      <button className="btn_btn-danger">Browse Two-sided Bu...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 2.PNG"
                      alt="A5 flyers (Single Sided)"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">A5 flyers (Single Sided)</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦16,500
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG">
                      <button className="btn_btn-danger">Browse A5 flyers (S...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 3.PNG"
                      alt='Round Stickers (3.5" Diameter)'/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Round Stickers (3.5&quot; Diameter)</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦10,900
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG">
                      <button className="btn_btn-danger">Browse Round Sticke...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 4.PNG"
                      alt="Simple Mugs"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Simple Mugs</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦3,000
                      <span>per 1</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/simple-mugs.html" >
                      <button className="btn_btn-danger">Browse Simple Mugs</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 5.PNG"
                      alt="Postcards (A6)"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Postcards (A6)</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦14,200
                      <span>per 50</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/postcards-a6.html" >
                      <button className="btn_btn-danger">Browse Postcards (A...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 6.PNG"
                      alt="Roll Up Banners (Big Base)" />
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Roll Up Banners (Big Base)</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦35,200
                      <span>per 1</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/roll-up-banners-big-base.html"
                    >
                      <button className="btn_btn-danger">Browse Roll Up Bann...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 7.PNG"
                      alt="A2 Posters"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">A2 Posters</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦45,500
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/a2-posters.html" >
                      <button className="btn_btn-danger">Browse A2 Posters</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 8.PNG"
                      alt="Trifold Brochures"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Trifold Brochures</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦30,400
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/trifold-brochures.html" >
                      <button className="btn_btn-danger">Browse Trifold Broc...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 9.PNG"
                      alt="Landscape ID Cards"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Landscape ID Cards</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦2,000
                      <span>per 1</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/landscape-id-cards.html" >
                      <button className="btn_btn-danger">Browse Landscape ID...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 10.PNG"
                      alt="Off White T-shirts"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Off White T-shirts</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦3,800
                      <span>per 1</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/off-white-t-shirts.html" >
                      <button className="btn_btn-danger">Browse Off White T-...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 11.PNG"
                      alt="A4 Branded Paper Bags"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">A4 Branded Paper Bags</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦67,000
                      <span>per 100</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="product/a4-branded-paper-bags.html">
                      <button className="btn_btn-danger ">Browse A4 Branded P...</button>
                    </a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 1.PNG"
                      alt="A4 Courier Bags"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">A4 Courier Bags</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦17,600
                      <span>per 100</span>
                    </h3>
                    <a
                      className="Button__StyledLink-sc-1f6zs39-1 kdzEVG">
                      <button className="btn_btn-danger">Browse A4 Courier B...</button>
                    </a>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="c-products-preview content-container mx-auto py-8">
              <div className="c-preview__header flex align-center justify-between">
                <h3 className=" font-dm sm:text-3xl text-xl">Popular Categories</h3>
                <a className="font-sf sm:text-base text-sm" href="all-products.html"
                  >See All Categories</a >
              </div>
              <div className="c-preview__main mt-6">
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 13.PNG"
                      alt="Greeting Cards"/>
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Greeting Cards</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦19,000
                      <span>per
                        50</span>
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="category/greeting-cards.html"><button className="btn_btn-danger"
                        >Browse
                        Greeting Car...</button></a>
                  </div>
                </div>
                <div className="c-preview__box shadow-lg font-sf cursor-pointer">
                  <div className="c-box__image">
                    <img
                      className="w-full"
                      src="/pictures/pic 14.PNG"
                      alt="Stickers " />
                  </div>
                  <div className="c-box__details p-4 font-sf--bold">
                    <h3 className="mb-5">Stickers</h3>
                    <p className="uppercase mb-2">starting at</p>
                    <h3 className="mb-5 text-xl">
                      ₦5,400
                      <span>per 75</span  >
                    </h3>
                    <a className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
                      href="category/stickers"><button className="btn_btn-danger" >BrowseStickers
                      </button></a>
                  </div>
                </div>
              </div>
            </div>
            <section className="c-brands content-container mx-auto py-20">
              <div className="c-brands__title font-dm mb-2 text-3xl">
                Nigeria’s No. 1 online print shop
                <span role="img" aria-label="crown">👑</span>
              </div>
              <div className="c-brands__sub font-sf md:text-xl max-w-prose mb-8">
                Our print services and solutions are trusted by these brands and
                over 15,000 other businesses in Nigeria.
              </div>
              <img
                src="/pictures/pic 15.PNG"
                alt
              />
            </section>


            <section className="c-testimonials py-16 mx-auto">
              <div className="c-testimonials__inner content-container mx-auto">
                <div className="c-testimonials__title font-dm mb-6 text-3xl">
                  What Customers Say About Us
                  <span role="img" aria-label="crown">🙌🏾</span>
                </div>
                <div className="c-testimonials__grid grid">
                  <div className="c-test-box relative grid p-4">
                    <div className="pages___StyledDiv2-sc-1u1ksla-1 gbZdoc">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;11&#x27; height=&#x27;10&#x27; viewBox=&#x27;0 0 11 10&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M3.18233 9.17582C6.99168 9.17582 9.07486 6.02241 9.07486 3.28788C9.07486 3.19831 9.07303 3.10915 9.06901 3.02039C9.47338 2.72829 9.82485 2.36377 10.1021 1.94881C9.73099 2.11362 9.33166 2.22457 8.91275 2.2746C9.34033 2.01841 9.66859 1.61314 9.82346 1.13001C9.42332 1.36704 8.9802 1.53932 8.50838 1.63233C8.13046 1.2301 7.59242 0.978516 6.99667 0.978516C5.85298 0.978516 4.92555 1.90527 4.92555 3.04762C4.92555 3.21001 4.94372 3.36796 4.97925 3.51947C3.258 3.43293 1.73172 2.60948 0.710253 1.35736C0.532393 1.66318 0.429836 2.01842 0.429836 2.39746C0.429836 3.11542 0.79546 3.74923 1.35145 4.12001C1.01167 4.10952 0.692486 4.01632 0.413509 3.86119C0.413205 3.86988 0.413203 3.87834 0.413203 3.88762C0.413203 4.88982 1.12707 5.72657 2.0747 5.91618C1.90068 5.96358 1.71758 5.989 1.5286 5.989C1.39536 5.989 1.26555 5.9759 1.13937 5.95168C1.40303 6.77392 2.16758 7.37226 3.07402 7.38898C2.36519 7.94413 1.47227 8.27477 0.501816 8.27477C0.334856 8.27477 0.169918 8.26528 0.0078125 8.24613C0.924378 8.83316 2.01271 9.17569 3.18245 9.17569&#x27; fill=&#x27;%231DA1F2&#x27;/%3E%3C/svg%3E%0A"
                        alt="twitter icon"
                        className="pages___StyledImg-sc-1u1ksla-2 eOPTg" />
                    </div>
                    <div className="c-content">
                      <div className="c-test-box__name my-2 font-sf text-sm">
                        Amina Ebele
                        <a
                          target="_blank"
                          className="pages___StyledA-sc-1u1ksla-3 jYDlAr"
                          >@DeliciousAmina</a >
                      </div>
                      <div className="c-test-box__desc font-sf--reg my-4">
                        I am now the unofficial
                        <a
                          target="_blank"
                          className="pages___StyledA2-sc-1u1ksla-4 dJPXCC"
                          >@Printivo</a >
                        ambassador. What these guys just pulled to
                        ensure I got my menu cards today is stunning!
                      </div>
                    </div>
                  </div>
                  <div className="c-test-box relative grid p-4">
                    <div className="pages___StyledDiv3-sc-1u1ksla-5 cxnjeV">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;11&#x27; height=&#x27;10&#x27; viewBox=&#x27;0 0 11 10&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M3.18233 9.17582C6.99168 9.17582 9.07486 6.02241 9.07486 3.28788C9.07486 3.19831 9.07303 3.10915 9.06901 3.02039C9.47338 2.72829 9.82485 2.36377 10.1021 1.94881C9.73099 2.11362 9.33166 2.22457 8.91275 2.2746C9.34033 2.01841 9.66859 1.61314 9.82346 1.13001C9.42332 1.36704 8.9802 1.53932 8.50838 1.63233C8.13046 1.2301 7.59242 0.978516 6.99667 0.978516C5.85298 0.978516 4.92555 1.90527 4.92555 3.04762C4.92555 3.21001 4.94372 3.36796 4.97925 3.51947C3.258 3.43293 1.73172 2.60948 0.710253 1.35736C0.532393 1.66318 0.429836 2.01842 0.429836 2.39746C0.429836 3.11542 0.79546 3.74923 1.35145 4.12001C1.01167 4.10952 0.692486 4.01632 0.413509 3.86119C0.413205 3.86988 0.413203 3.87834 0.413203 3.88762C0.413203 4.88982 1.12707 5.72657 2.0747 5.91618C1.90068 5.96358 1.71758 5.989 1.5286 5.989C1.39536 5.989 1.26555 5.9759 1.13937 5.95168C1.40303 6.77392 2.16758 7.37226 3.07402 7.38898C2.36519 7.94413 1.47227 8.27477 0.501816 8.27477C0.334856 8.27477 0.169918 8.26528 0.0078125 8.24613C0.924378 8.83316 2.01271 9.17569 3.18245 9.17569&#x27; fill=&#x27;%231DA1F2&#x27;/%3E%3C/svg%3E%0A"
                        alt="twitter icon"
                        className="pages___StyledImg2-sc-1u1ksla-6 hqKDRG"/>
                    </div>
                    <div className="c-content">
                      <div className="c-test-box__name my-2 font-sf text-sm">
                        Oluwatosin
                        <a
                          target="_blank"
                          className="pages___StyledA3-sc-1u1ksla-7 bFdePQ"
                          >@tosingirlfx</a
                        >
                      </div>
                      <div className="c-test-box__desc font-sf--reg my-4">
                        <a
                          target="_blank"
                          className="pages___StyledA4-sc-1u1ksla-8 dWnkQU"
                          >@Printivo</a
                        >
                        delivered my mugs in 24hrs. Thank you so much!
                        It&#x27;s nice doing business with you. More to come.
                      </div>
                    </div>
                  </div>
                  <div className="c-test-box relative grid p-4">
                    <div className="pages___StyledDiv4-sc-1u1ksla-9 dPYCcC">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;11&#x27; height=&#x27;10&#x27; viewBox=&#x27;0 0 11 10&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M3.18233 9.17582C6.99168 9.17582 9.07486 6.02241 9.07486 3.28788C9.07486 3.19831 9.07303 3.10915 9.06901 3.02039C9.47338 2.72829 9.82485 2.36377 10.1021 1.94881C9.73099 2.11362 9.33166 2.22457 8.91275 2.2746C9.34033 2.01841 9.66859 1.61314 9.82346 1.13001C9.42332 1.36704 8.9802 1.53932 8.50838 1.63233C8.13046 1.2301 7.59242 0.978516 6.99667 0.978516C5.85298 0.978516 4.92555 1.90527 4.92555 3.04762C4.92555 3.21001 4.94372 3.36796 4.97925 3.51947C3.258 3.43293 1.73172 2.60948 0.710253 1.35736C0.532393 1.66318 0.429836 2.01842 0.429836 2.39746C0.429836 3.11542 0.79546 3.74923 1.35145 4.12001C1.01167 4.10952 0.692486 4.01632 0.413509 3.86119C0.413205 3.86988 0.413203 3.87834 0.413203 3.88762C0.413203 4.88982 1.12707 5.72657 2.0747 5.91618C1.90068 5.96358 1.71758 5.989 1.5286 5.989C1.39536 5.989 1.26555 5.9759 1.13937 5.95168C1.40303 6.77392 2.16758 7.37226 3.07402 7.38898C2.36519 7.94413 1.47227 8.27477 0.501816 8.27477C0.334856 8.27477 0.169918 8.26528 0.0078125 8.24613C0.924378 8.83316 2.01271 9.17569 3.18245 9.17569&#x27; fill=&#x27;%231DA1F2&#x27;/%3E%3C/svg%3E%0A"
                        alt="twitter icon"
                        className="pages___StyledImg3-sc-1u1ksla-10 kGSJak"
                      />
                    </div>
                    <div className="c-content">
                      <div className="c-test-box__name my-2 font-sf text-sm">
                        Oluwatosin
                        <a
                          target="_blank"
                          className="pages___StyledA5-sc-1u1ksla-11 iYcWRt"
                          >@olgablark</a >
                      </div>
                      <div className="c-test-box__desc font-sf--reg my-4">
                        These guys
                        <a
                          target="_blank"
                          className="pages___StyledA6-sc-1u1ksla-12 LtJBJ"
                          >@Printivo</a >
                        are really awesome and affordable. Excellent
                        customer service and delivery too. Thank you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="c-services content-container mx-auto">
              <div className="c-services__title font-dm mb-4 text-2xl sm:text-3xl">
                You can count on us for:
              </div>
              <div className="c-services__grid grid">
                <div className="services-box sm:grid block">
                  <div className="c-icon mb-2">
                    <img
                      src="data:image/svg+xml,%3Csvg width=&#x27;72&#x27; height=&#x27;72&#x27; viewBox=&#x27;0 0 72 72&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M43.5 66C54.2697 66 63 57.2697 63 46.5C63 35.7303 54.2697 27 43.5 27C32.7303 27 24 35.7303 24 46.5C24 57.2697 32.7303 66 43.5 66Z&#x27; fill=&#x27;%239BD9F0&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M36 10.5C21.9167 10.5 10.5 21.9167 10.5 36C10.5 50.0832 21.9167 61.5 36 61.5C50.0832 61.5 61.5 50.0832 61.5 36C61.5 21.9167 50.0832 10.5 36 10.5ZM13.5 36C13.5 23.5736 23.5736 13.5 36 13.5C48.4263 13.5 58.5 23.5736 58.5 36C58.5 48.4263 48.4263 58.5 36 58.5C23.5736 58.5 13.5 48.4263 13.5 36ZM37.5 19.5C37.5 18.6716 36.8283 18 36 18C35.1717 18 34.5 18.6716 34.5 19.5V34.5H22.5C21.6716 34.5 21 35.1717 21 36C21 36.8283 21.6716 37.5 22.5 37.5H36C36.8283 37.5 37.5 36.8283 37.5 36V19.5Z&#x27; fill=&#x27;%23384A62&#x27;/%3E%3C/svg%3E%0A"
                      alt="clock"/>
                  </div>
                  <div className="c-text">
                    <div className="c-text__title mb-1 font-sf">
                      Fast Turnaround Within Days
                    </div>
                    <div className="c-text__sub font-sf--reg">
                      Your order gets to you within 3-7 working days via DHL or
                      our very own Printivo Direct.
                    </div>
                  </div>
                </div>
                <div className="services-box sm:grid block">
                  <div className="c-icon mb-2">
                    <img
                      src="data:image/svg+xml,%3Csvg width=&#x27;72&#x27; height=&#x27;72&#x27; viewBox=&#x27;0 0 72 72&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M35.987 9.656v52.32l-13.29-9.39c-4.32-3.51-7.11-8.7-7.62-14.25l-2.31-24.84 23.22-3.84z&#x27; fill=&#x27;%23A7F5E7&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M61.457 10.226l-25.17-4.17c-.18-.03-.39-.03-.57 0l-25.17 4.17c-.93.15-1.59.99-1.5 1.92l2.43 26.52c.6 6.51 3.87 12.6 9.06 16.77l14.43 10.2c.3.24.66.33 1.02.33s.72-.09 1.05-.33l14.4-10.2c.03 0 .06-.03.09-.06 5.1-4.11 8.37-10.2 8.97-16.71l2.46-26.52c.06-.93-.57-1.77-1.5-1.92zm-4.53 28.11c-.51 5.55-3.3 10.71-7.59 14.22l-13.35 9.42-13.29-9.39c-4.32-3.51-7.11-8.7-7.62-14.25l-2.31-24.84 23.22-3.84 23.22 3.84-2.28 24.84z&#x27; fill=&#x27;%23384A62&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M35.987 65.966v-3.99l-13.29-9.39c-4.32-3.51-7.11-8.7-7.62-14.25l-2.31-24.84 23.22-3.84V6.034c-.093 0-.185.008-.27.022l-25.17 4.17c-.93.15-1.59.99-1.5 1.92l2.43 26.52c.6 6.51 3.87 12.6 9.06 16.77l14.43 10.2c.3.24.66.33 1.02.33z&#x27; fill=&#x27;%23000&#x27; fill-opacity=&#x27;.3&#x27;/%3E%3C/svg%3E"
                      alt="clock" />
                  </div>
                  <div className="c-text">
                    <div className="c-text__title mb-1 font-sf">
                      100% Top Quality
                    </div>
                    <div className="c-text__sub font-sf--reg">
                      Only the finest materials, machines and people will be
                      involved in fulfilling your order.
                    </div>
                  </div>
                </div>
                <div className="services-box sm:grid block">
                  <div className="c-icon mb-2">
                    <img
                      src="data:image/svg+xml,%3Csvg width=&#x27;72&#x27; height=&#x27;72&#x27; viewBox=&#x27;0 0 72 72&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M49.8 48.291h11.4c.99 0 1.8-.81 1.8-1.8v-12c0-.99-.81-1.8-1.8-1.8H49.8c-4.29 0-7.8 3.51-7.8 7.8s3.51 7.8 7.8 7.8zm-4.2-7.8c0-2.31 1.89-4.2 4.2-4.2h9.6v8.4h-9.6c-2.31 0-4.2-1.89-4.2-4.2zm6.9 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z&#x27; fill=&#x27;%23E384B6&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M53.73 14.57l-.11 4.921H31.435L53.73 14.57zM14.62 19.49l40.55-8.941c.54-.12 1.11.03 1.53.36.42.36.66.87.66 1.44l-.144 7.141h.984c2.64 0 4.8 2.16 4.8 4.8v10.2c0-.99-.81-1.8-1.8-1.8h-1.8v-8.4c0-.66-.54-1.2-1.2-1.2H13.8c-.66 0-1.2.54-1.2 1.2v32.4c0 .66.54 1.2 1.2 1.2h44.4c.66 0 1.2-.54 1.2-1.2v-8.4h1.8c.99 0 1.8-.81 1.8-1.8v10.2c0 2.64-2.16 4.8-4.8 4.8H13.8c-2.64 0-4.8-2.16-4.8-4.8v-32.4c0-2.64 2.16-4.8 4.8-4.8h.82z&#x27; fill=&#x27;%23384A62&#x27;/%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M53.73 14.57l-.11 4.921h3.597l.143-7.141c0-.57-.24-1.08-.66-1.44-.42-.33-.99-.48-1.53-.36L14.62 19.49h16.816L53.73 14.57zM52.5 40.49a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z&#x27; fill=&#x27;%23000&#x27; fill-opacity=&#x27;.3&#x27;/%3E%3C/svg%3E"
                      alt="clock" />
                  </div>
                  <div className="c-text">
                    <div className="c-text__title mb-1 font-sf">
                      Affordable Services
                    </div>
                    <div className="c-text__sub font-sf--reg">
                      All products are adequately priced to ensure you get value
                      for your money at all times.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="c-mentions mx-auto">
              <div className="inner content-container mx-auto">
                <div
                  className="c-mentions__title font-dm mb-8 text-2xl sm:text-3xl">
                  Our amazing work got noticed by:
                </div>
                <div className="c-mentions__grid grid">
                  <div className="c-company">
                    <div className="c-company__img">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;212&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 212 30&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M39.615 10H59.44V0H39.615v10zM0 0v10h9.895v20h9.895V10h9.93V0H0zM29.72 30h29.72V20H39.615V10H29.72v20zM84.708 7.552h-14.56v4.161h4.877v13.042h4.806V11.713h4.877v-4.16zM90.186 11.573c-3.428 0-5.973 2.273-5.973 6.749 0 3.95 2.156 6.713 6.079 6.713 2.05 0 3.71-.524 5.3-1.468l-1.696-2.833c-1.308.665-2.226.91-3.392.91-1.202 0-2.05-.63-2.227-2.063h7.669c.035-.21.035-.49.035-.875.035-4.79-2.191-7.133-5.795-7.133zm-1.838 5.245c.141-1.294.707-1.958 1.731-1.958 1.308 0 1.767.665 1.98 1.958h-3.711zM104.498 21.434c-1.202 0-1.838-1.05-1.838-3.112 0-2.028.565-3.182 1.732-3.182.954 0 1.378.524 2.014 1.678l3.075-2.308c-1.131-1.818-2.545-2.937-5.019-2.937-4.17 0-6.22 2.728-6.22 6.679 0 4.335 2.298 6.748 6.114 6.748 2.297 0 3.711-.874 5.231-3.077l-2.828-2.203c-.848 1.26-1.413 1.714-2.261 1.714zM119.906 11.573c-1.555 0-2.474.525-3.287 1.12v-5.84l-4.488 1.783V24.79h4.488v-7.377c0-1.609.565-2.063 1.52-2.063.918 0 1.484.454 1.484 2.098v7.342h4.488v-7.902c0-3.392-1.378-5.315-4.205-5.315zM134.889 20.874c-2.085 0-2.933-2.098-2.933-4.72 0-2.727.884-4.72 2.898-4.72 1.59 0 2.191 1.014 2.792 2.622l4.382-1.713c-1.202-3.252-2.898-5.07-7.174-5.07-4.665 0-7.951 3.357-7.951 8.88 0 5.106 2.756 8.882 7.916 8.882 4.134 0 6.078-2.203 7.244-4.44l-4.064-2.133c-.954 1.608-1.59 2.412-3.11 2.412zM149.272 12.797v-.944h-4.488v12.902h4.488v-7.028c0-1.573.672-2.098 1.767-2.098.884 0 1.52.455 2.085 1.084l1.06-4.58c-.53-.315-1.166-.56-2.12-.56-1.166 0-2.05.49-2.792 1.224zM163.761 19.23c0 1.609-.565 2.064-1.484 2.064s-1.484-.455-1.484-2.098v-7.343h-4.488v7.902c0 3.392 1.378 5.28 4.241 5.28 1.519 0 2.473-.525 3.251-1.119v.874h4.488V11.888h-4.488v7.343M179.275 11.573c-1.555 0-2.473.525-3.286 1.12v-.875h-4.488V24.72h4.488v-7.377c0-1.609.565-2.063 1.519-2.063.919 0 1.485.454 1.485 2.098v7.342h4.488v-7.902c0-3.321-1.343-5.245-4.206-5.245zM192.386 21.434c-1.201 0-1.837-1.05-1.837-3.112 0-2.028.565-3.182 1.696-3.182.954 0 1.378.524 2.014 1.678l3.075-2.308c-1.131-1.818-2.545-2.937-5.018-2.937-4.17 0-6.22 2.728-6.22 6.679 0 4.335 2.297 6.748 6.114 6.748 2.297 0 3.71-.874 5.23-3.077l-2.827-2.203c-.778 1.26-1.379 1.714-2.227 1.714zM207.794 11.573c-1.555 0-2.474.525-3.287 1.12v-5.84l-4.488 1.783V24.79h4.488v-7.377c0-1.609.566-2.063 1.52-2.063.919 0 1.484.454 1.484 2.098v7.342h4.488v-7.902c.036-3.392-1.343-5.315-4.205-5.315z&#x27; fill=&#x27;%23506683&#x27;/%3E%3C/svg%3E"
                        alt="techcrunch logo" />
                    </div>
                    <a
                      className="c-company__link font-sf inline-block mt-1 underline cursor-pointer"
                      href="https://techcrunch.com/2015/10/23/printivo/" >Read the article here</a >
                  </div>
                  <div className="c-company">
                    <div className="c-company__img">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;112&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 112 30&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M63.448 10.111c0-3.222.056-6.222.224-9l-8.568 1.611V3.5l.84.111c.616.056 1.008.278 1.232.611.224.39.392.945.504 1.778.112 1.611.224 5.278.168 11.055 0 5.723-.056 9.334-.168 10.723 3.08.666 5.488.944 7.28.944 3.36 0 5.992-.944 7.896-2.889 1.904-1.889 2.912-4.555 2.912-7.833 0-2.611-.728-4.778-2.184-6.5-1.456-1.722-3.304-2.556-5.488-2.556-1.456 0-2.968.39-4.648 1.167zm.168 17.111c-.112-1.778-.224-7.11-.224-15.833.504-.167 1.176-.278 2.016-.278 1.344 0 2.408.667 3.192 2.056.784 1.389 1.176 3.055 1.176 5.166 0 2.611-.448 4.723-1.344 6.5-.896 1.723-2.016 2.611-3.416 2.611-.448-.11-.896-.166-1.4-.222zM22.96 1.667H.56v1.11l1.176.112c.896.167 1.512.5 1.904 1 .392.555.616 1.444.672 2.667.448 6 .448 11.61 0 16.777C4.2 24.556 3.976 25.444 3.64 26c-.392.555-1.008.889-1.904 1l-1.176.167v1.11h14.448v-1.11l-1.512-.112c-.896-.11-1.512-.5-1.904-1-.392-.555-.616-1.444-.672-2.666-.168-2.222-.28-4.778-.28-7.611l3.024.055c1.624.056 2.744 1.278 3.304 3.722h1.12V10.5h-1.12c-.56 2.389-1.624 3.611-3.304 3.667l-3.024.055c0-5 .112-8.555.28-10.722h4.424c3.136 0 5.264 2 6.496 6l1.344-.389-.224-7.444zm-2.632 17.11c0 2.89.84 5.278 2.464 7.167 1.624 1.89 4.032 2.778 7.056 2.778s5.488-.944 7.28-2.889c1.792-1.889 2.632-4.277 2.632-7.166 0-2.89-.84-5.278-2.464-7.167-1.624-1.889-4.032-2.778-7.056-2.778s-5.488.945-7.28 2.89c-1.792 1.888-2.632 4.277-2.632 7.166zm12.488-6.333c.672 1.611.952 3.723.952 6.278 0 5.89-1.232 8.778-3.64 8.778-1.232 0-2.184-.833-2.856-2.5-.672-1.667-.952-3.778-.952-6.278 0-5.833 1.232-8.722 3.64-8.722 1.232-.056 2.184.778 2.856 2.444zm47.32 13.5c1.848 1.834 4.2 2.778 7 2.778 1.736 0 3.248-.333 4.592-1.055 1.344-.667 2.408-1.5 3.136-2.5l-.56-.667c-1.232.944-2.632 1.389-4.256 1.389-2.24 0-3.976-.722-5.152-2.222-1.232-1.5-1.792-3.39-1.68-5.834H95.2c0-2.666-.672-4.833-2.072-6.555-1.4-1.667-3.36-2.5-5.88-2.5-3.136 0-5.544 1-7.28 2.944-1.736 1.945-2.576 4.333-2.576 7.167 0 2.889.896 5.222 2.744 7.055zM84.28 12c.616-1.333 1.4-2 2.464-2 1.68 0 2.52 2.111 2.52 6.389l-5.936.111c.056-1.667.336-3.167.952-4.5zm25.984-2.222c-1.512-.667-3.416-1.056-5.712-1.056-2.352 0-4.2.611-5.6 1.778-1.4 1.167-2.128 2.611-2.128 4.333 0 1.5.448 2.667 1.288 3.5.84.834 2.184 1.556 3.92 2.167 1.568.555 2.688 1.111 3.248 1.611.56.556.896 1.167.896 2 0 .778-.28 1.5-.896 2.056-.56.61-1.344.888-2.352.888-2.464 0-4.312-1.777-5.6-5.333l-.952.278.224 5.555c2.016.778 4.256 1.167 6.72 1.167 2.576 0 4.536-.555 5.992-1.722 1.456-1.111 2.184-2.722 2.184-4.722 0-1.334-.336-2.445-1.064-3.278-.728-.833-1.904-1.556-3.584-2.222-1.848-.667-3.136-1.278-3.808-1.834-.672-.555-1.008-1.222-1.008-2.055 0-.833.224-1.5.728-2.056.504-.555 1.12-.777 1.904-.777 2.24 0 3.864 1.61 4.872 4.777l.952-.277-.224-4.778zm-53.872-.5c-.784-.39-1.624-.556-2.576-.556s-1.904.39-2.968 1.167c-1.064.778-1.848 1.833-2.464 3.278l.056-4.445-8.512 1.667v.778l.84.055c1.064.111 1.68.945 1.792 2.445.336 3.444.336 7.11 0 11-.112 1.5-.728 2.277-1.792 2.444l-.84.111v1.056H51.8v-1.056l-1.512-.11c-1.064-.112-1.68-.945-1.792-2.445a56.305 56.305 0 01-.112-10.223c.336-.555 1.064-.889 2.184-1 1.12-.11 2.408.223 3.752 1l2.072-5.166z&#x27; fill=&#x27;%23506683&#x27;/%3E%3C/svg%3E"
                        alt="forbes logo"/>
                    </div>
                    <a
                      className="c-company__link font-sf inline-block underline cursor-pointer"
                      href="https://www.forbes.com/sites/montymunford/2017/10/18/these-are-the-top-african-tech-startups-you-need-to-know-about/#7b5645124161"
                      >Read the article here</a >
                  </div>
                  <div className="c-company">
                    <div className="c-company__img">
                      <img
                        src="../res.cloudinary.com/dmwfd0zhh/image/upload/v1610286399/printivo/Techpoint_Logo_ucyvgg.png"
                        alt="techpoint logo" />
                    </div>
                    <a className="c-company__link font-sf inline-block underline cursor-pointer"
                      href="https://techpoint.africa/2017/02/09/printivo-makes-500-startups-last-batch/"
                      >Read the article here</a >
                  </div>
                  <div className="c-company">
                    <div className="c-company__img">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;143&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 143 30&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0)&#x27; fill=&#x27;%23506683&#x27;%3E%3Cpath d=&#x27;M0 14.805V29.61h23.454l3.221-3.233 3.182-3.195V0H0v14.805zm8.918-6.234c.196.702.55.78 2.946.78h2.711l-.118 1.441-.118 1.48-2.632.117-2.671.117v3.078c0 2.494.118 3.117.589 3.117s.59-.545.59-2.532v-2.533h4.36l-.118 4.559-.118 4.597-3.064.117-3.104.117-1.925-1.91-1.925-1.908V7.792h2.2c1.847 0 2.24.117 2.397.78zm16.618 2.338v3.117h-2.161c-2.121 0-2.16 0-2.16-1.169 0-.896-.158-1.169-.786-1.169-.747 0-.786.273-.786 3.701 0 3.429.04 3.702.786 3.702.707 0 .785-.273.785-2.143v-2.143h4.321v2.416c0 2.26-.078 2.532-1.453 3.896l-1.453 1.48H15.32V11.143l1.65-1.676 1.65-1.675h6.915v3.117zM73.464 15v7.597H77v-2.649c0-4.753 1.218-6.974 2.907-5.299.472.468.629 1.442.629 4.286v3.662h4.046l-.196-4.402c-.118-2.766-.354-4.675-.707-5.221-1.14-1.753-3.929-2.22-5.657-.857l-1.022.78V7.402h-3.536V15zM110.786 15v7.597h1.532c1.021 0 1.611-.194 1.768-.623.235-.584.314-.584 1.218 0 1.1.701 3.025.818 4.203.195 1.689-.896 2.475-5.572 1.454-8.494-.786-2.182-3.693-3.039-5.54-1.597l-.982.74.197-2.688.196-2.727h-4.046V15zm6.443-.117c.825 1.169.785 3.156-.079 4.208-.629.74-.864.818-1.571.428-.708-.39-.865-.779-.865-2.57 0-1.598.157-2.183.707-2.494.943-.585 1.14-.546 1.808.428zM136.714 15v7.597h3.536V7.403h-3.536V15zM42.036 9.974c0 .312-.511 1.13-1.179 1.792-1.257 1.247-1.532 2.26-.59 2.26.472 0 .59.545.59 2.416 0 3.078.59 5.26 1.572 5.766.825.428 3.496.506 4.478.156.393-.156.629-.702.629-1.598 0-.818-.157-1.246-.432-1.09-.197.155-.825.155-1.375.038-.904-.233-.943-.428-.943-2.96v-2.728h1.375c1.296 0 1.375-.078 1.375-1.364 0-1.285-.079-1.363-1.375-1.363-1.218 0-1.375-.117-1.375-.974s-.157-.974-1.375-.974c-.982 0-1.375.155-1.375.623zM51.936 11.922c-1.69.857-2.515 2.455-2.515 4.987-.039 3.78 1.925 5.688 5.893 5.688 2.986 0 4.007-.506 4.007-1.948 0-1.169-.039-1.207-1.453-.896-2.279.468-3.732.273-4.322-.506-.275-.39-.51-.818-.51-1.013 0-.156 1.61-.312 3.535-.312h3.536v-1.169c0-1.558-.864-3.506-1.925-4.441-1.178-1.052-4.557-1.247-6.246-.39zm4.007 2.338c1.021.974.746 1.324-1.179 1.324-1.296 0-1.69-.117-1.493-.506.943-1.598 1.65-1.831 2.672-.818zM64.94 11.883c-1.808.78-2.868 2.688-2.868 5.182 0 3.701 1.728 5.532 5.264 5.532 2.671 0 3.771-.623 3.771-2.22 0-1.403-.196-1.48-1.807-.857-2.318.857-4.046-.74-3.496-3.234.353-1.598 1.689-2.338 3.26-1.87 1.179.311 1.297.272 1.808-.896.51-1.17.471-1.286-.511-1.715-1.375-.623-3.89-.584-5.422.078zM89.768 11.805c-2.593 1.208-3.654 3.896-2.79 7.208.59 2.377 2.28 3.584 5.03 3.584 2.67 0 3.456-.506 3.456-2.181 0-1.17-.118-1.364-.668-1.13-1.846.701-2.789.662-3.614-.156-1.1-1.091-1.1-3.273-.04-4.325.904-.896.944-.896 2.633-.428 1.178.35 1.257.272 1.65-.857.314-.78.314-1.325.04-1.598-.63-.623-4.4-.701-5.697-.117zM100.1 11.766c-1.375.35-1.414.429-1.021 1.48.353 1.053.471 1.13 2.592 1.053 1.808-.078 2.24.039 2.358.584.117.546-.118.701-.904.701-.55 0-1.846.195-2.789.429-1.415.35-1.925.701-2.397 1.714-1.139 2.377.315 4.87 2.829 4.87 1.453 0 3.339-.7 3.339-1.246 0-.624.747-.312.982.467.197.585.59.78 1.611.78h1.336v-3.936c0-4.636-.59-6.311-2.436-6.935-1.454-.506-3.496-.506-5.5.04zm4.007 6.74c0 1.052-1.178 1.87-2.121 1.52-1.375-.546-.432-2.494 1.218-2.494.707 0 .903.234.903.974zM126.029 11.766c-1.375.35-1.415.429-1.022 1.48.354 1.053.472 1.13 2.593 1.053 1.807-.078 2.239.039 2.357.584.118.546-.118.701-.903.701-.55 0-1.847.195-2.79.429-1.414.35-1.925.701-2.396 1.714-1.139 2.377.314 4.87 2.828 4.87 1.454 0 3.34-.7 3.34-1.246 0-.624.746-.312.982.467.196.585.589.78 1.611.78h1.335v-3.936c0-4.636-.589-6.311-2.435-6.935-1.454-.506-3.497-.506-5.5.04zm4.007 6.74c0 1.052-1.179 1.87-2.122 1.52-1.375-.546-.432-2.494 1.218-2.494.707 0 .904.234.904.974z&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0&#x27;%3E%3Crect width=&#x27;143&#x27; height=&#x27;30&#x27; fill=&#x27;%23fff&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                        alt="techcabal logo"/>
                    </div>
                    <a className="c-company__link font-sf inline-block underline cursor-pointer"
                      href="https://techcabal.com/2016/01/14/the-printivo-story/"
                      >Read the article here</a >
                  </div>
                  <div className="c-company">
                    <div className="c-company__img">
                      <img
                        src="data:image/svg+xml,%3Csvg width=&#x27;65&#x27; height=&#x27;30&#x27; viewBox=&#x27;0 0 65 30&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0)&#x27;%3E%3Cpath d=&#x27;M20 8.571h-5a6.429 6.429 0 100 12.858h5.593a.836.836 0 00.836-.836V5.836a5.835 5.835 0 0110.9-2.893l6.242 10.921V5.836a5.836 5.836 0 0110.9-2.893l6.243 10.921V0h3.572L60 .714 60.714 0h3.572v24.164a5.836 5.836 0 01-10.9 2.893l-6.243-10.921v8.028a5.836 5.836 0 01-10.9 2.893L30 16.136v8.028A5.836 5.836 0 0124.164 30H15a15 15 0 010-30h5v3.571l-.714.715L20 5v3.571z&#x27; fill=&#x27;%23506683&#x27;/%3E%3Cpath d=&#x27;M20 4.286h-5a10.714 10.714 0 100 21.428h9.164a1.55 1.55 0 001.55-1.55V5.836a1.55 1.55 0 012.893-.772l11.357 19.872a1.55 1.55 0 002.893-.772V5.836a1.55 1.55 0 012.893-.772l11.357 19.872A1.55 1.55 0 0060 24.164V0&#x27; stroke=&#x27;%23fff&#x27; stroke-width=&#x27;1.429&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0&#x27;%3E%3Crect width=&#x27;64.286&#x27; height=&#x27;30&#x27; fill=&#x27;%23fff&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                        alt="CNN logo"/>
                    </div>
                    <a className="c-company__link font-sf inline-block underline cursor-pointer"
                      href=""
                      >Read the article here</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

    </>
  );
};

export default App;
