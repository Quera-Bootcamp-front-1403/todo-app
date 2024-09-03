/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html"],
  theme: {
    extend: {
        colors: {
            dark : {
                "bg" : "#060C18",
                "menu" : "#091120",
                "bg2" : "#041933",
                "bg3":"#0C1B31",
                "text-gray": "#7A7A7A",
                "bg4" : "#002247",
                "border" : "#2F3132",
            }
        },
        textColor : {
          "--primary-gray" : "#141414",
          "--secondary-gray" : "#242424",
          "--thirdry-gray" :"#7D7D7F",
          "--fourth-gray" :"#848890",
          "--primary-blue": "#007BFF",
          "--secondary-gray2":"#525252",
          "--fifth-gray" : "#808080",
          "--sixth-white" : "#F7F7F7",
        },
        boxShadow : {
          "headmobile" : "0px 4px 58.5px 0px #0000000F",
        },
        borderColor : {
          "--primary-white" : "#F5F6F8",
          "--secondary-white" : "#E9E9E9",
        },
        backgroundColor : {
          "--primary-white2" : "#F5FAFF",
          "secondary-white" :"#F7F7F7",
        },
        spacing : {
            "custom-328" : "328px",
            "custom-238" : "238px",
            "custom-274" : "274px",
            "custom-800" : "800px",
            "custom-272" : "272px",
            "custom-984" : "984px",
            "custom-242" : "242px",
            "custom-48" : "48px",
            "custom-248" : "248px",
            "custom-44" : "44px",
            "custom-72" : "72px",
            "custom-36" : "36px",
            "custom-200" : "200px",
            "custom-150" : "150px",
            "custom-209" : "209px",
            "custom-42" : "42px",
            "custom-99" : "99px",
            "custom-34" : "34px",
            "custom-6" : "6px",
        },
    },
  },
  plugins: [],
}