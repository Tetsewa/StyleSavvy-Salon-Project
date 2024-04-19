export default function Footer() {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-green-300 p-3">
                Monday to Friday: 9:00 AM - 6:00 PM
                Saturday: 9:00 AM - 5:00 PM
                Sunday: Closed
            </div>

            <div className="bg-black text-white p-3">
                <p>
                    Please note that our salon may have adjusted opening hours on
                    public holidays or special occasions. We recommend calling ahead
                    to confirm availability.
                </p>

            </div>

            <div className="bg-gray-300 p-3">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 whitespace-pre-wrap"> +312564855622</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 whitespace-pre-wrap"> info@stylesavvy.nl</p>
            </div>

        </footer>
    )


}