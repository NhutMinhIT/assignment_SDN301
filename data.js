import category from "./category";


const flowers = [{
        id: 1,
        image: require("./assets/public/ngocdiemdaichau.jpg"),
        name: "Ngọc Điễm Đai Châu",
        category: category[0].id,
        description: "Theo nhiều người sành chơi thì tiêu chí của một chậu lan ngọc điểm đai trâu đẹp chính là bông hoa phải to nở đẹp và đều kết hợp với lá, rễ dài và khỏe, lá sau to hơn lá trước và cây hoàn toàn không bị sâu bệnh hại. Với loại hoa cánh mai thì 5 cánh mai phải chồng khít nhau và có màu trắng tuyền kèm với bên trong có lưỡi đỏ hoặc tím. Bông to dần và đồng 5 ngàn trở lên.",
        favourite: false,
    },
    {
        id: 2,
        image: require("./assets/public/ngocdiemtim.jpg"),
        name: "Ngọc Điễm Tím",
        description: "Lan Ngọc Điểm là loại Lan phân bố khá phổ biến ở nước ta. Lan Ngọc Điểm khá dễ trồng. Thích nghi với mọi điều kiện khí hậu tại Việt Nam. Ngọc Điểm cho hoa vào dịp tết, hoa đẹp có mùi hương thoang thoảng đặc trưng của Lan rừng. Nên hầu như anh chị em chơi lan, ai cũng có cho mình từ một đến hai cây trong vườn. Với tình yêu đặc biệt dành cho lan Ngọc Điểm.",
        category: category[0].id,
        favourite: false,
    },
    {
        id: 3,
        image: require("./assets/public/hodiepvang.jpg"),
        name: "Hồ Điệp Vàng",
        description: 'Sắc tươi sáng của màu vàng hoa lan như ánh nắng mặt trời mang lại hy vọng và hạnh phúc. Ngoài ra màu lan vàng tượng trưng cho sự tươi mới, hạnh phúc, tích cực, rõ ràng, năng lượng, lạc quan, giác ngộ, tưởng nhớ, trí tuệ, danh dự, lòng trung thành và niềm vui. Màu vàng của lan còn là biểu tượng may mắn và hòa bình trong nhiều nền văn hóa. Ở một số quốc gia như Nhật Bản thì màu vàng tượng trưng cho sự can đảm. Còn ở Ấn Độ, màu vàng là màu của các thương gia',
        category: category[1].id,
        favourite: false,
    },
    {
        id: 4,
        image: require("./assets/public/hodieptim.jpg"),
        name: "Hồ Điệp Tím",
        description: "Chậu lan hồ điệp tím sẽ tô điểm cho căn phòng nhà bạn tươi sắc hơn. Đặt chậu trang trí ở phóng khách, phòng sinh nhật trong gia đình hoặc đặt trên bàn làm việc cũng giúp điều hòa bầu không khí, tạo không gian thư giãn cho bạn và người thân. Chậu hoa vừa có giá trị thẩm mỹ vừa mang giá trị tinh thần to lớn sẽ giúp cho cuộc sống của bạn thêm sắc màu và ý nghĩa hơn.",
        category: category[1].id,
        favourite: false,
    },
];

export default flowers;