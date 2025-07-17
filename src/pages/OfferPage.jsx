import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const offerContent = {
  // НОВОЕ СОДЕРЖАНИЕ ОФФЕРА С ПЕРЕВОДАМИ
  ru: {
    filterSelector: {
      open: "Открыть фильтр",
      close: "Закрыть фильтр",
    },
    title:
      "ПУБЛИЧНАЯ ОФЕРТА О ПРЕДОСТАВЛЕНИИ ОБРАЗОВАТЕЛЬНЫХ УСЛУГ УЧЕБНЫМ ЦЕНТРОМ MEGASCHOOL",
    sections: [
      {
        id: "definitions",
        title: "Термины и определения",
        content: `**Публичная оферта** – это предложение о заключении договора. Договор заключается путем безусловного принятия оферты (ее акцепта).
**Акцепт Оферты** – полное и безоговорочное принятие действий, указанных в пункте 1.3. настоящей Оферты. Акцепт Оферты приводит к заключению Договора.
**Исполнитель / Учебный центр** – юридическое лицо, предоставляющее образовательные услуги на основании соответствующей лицензии/подтверждения № [Указать номер лицензии], выданного [Указать дату выдачи лицензии].
**Обучающийся/Заказчик** – физическое лицо, принявшее условия настоящего договора (акцептировавшее настоящую оферту), являющееся конечным пользователем услуг. В случае несовершеннолетних Обучающихся, Заказчиком выступают их законные представители.
**MegaSchool App / MegaSchool Learning Platform** – это программное обеспечение учебного центра, разработанное для специальных мобильных платформ (iOS, Android и др.) или веб-интерфейс, предназначенный для доступа к учебным материалам, расписанию, успеваемости и взаимодействию с учебным центром.
**Образовательная программа / Курс** – процесс обучения по определенной дисциплине или направлению (например, английский язык, IT-курсы, математика, русский язык, узбекская литература и другие школьные предметы) по методике учебного центра в течение определенного времени, выбранного и утвержденного учебным центром и Обучающимся/Заказчиком.
**Веб-сайт** – веб-страница учебного центра, расположенная в информационно-телекоммуникационной сети Интернет, доступная по следующему доменному имени (адресу, домену): https://megaschool.uz (или ваш актуальный домен).
**Тестирование уровня** – бесплатная процедура, направленная на определение уровня знаний или навыков Обучающегося для корректного распределения по группам или программам.
**MegaSchool Point / Бонусная система** – специальная система баллов или поощрений, введенная для стимулирования Обучающихся/Заказчиков во время учебных занятий или при достижении определенных результатов.
**Учебный центр MegaSchool** – это специализированное учебное здание или комплекс помещений, оборудованные необходимым для учебного процесса оборудованием, материалами, литературой и другими материально-техническими средствами, где занятия проводятся непосредственно.`,
        tags: ["Определения", "Термины", "Введение"],
      },
      {
        id: "general-provisions",
        title: "1. Общие положения",
        content: `**1.1.** В соответствии с Гражданским кодексом Республики Узбекистан, настоящий документ является официальным публичным предложением (офертой) Учебного центра MegaSchool (далее – Учебный центр) в адрес любого физического лица (далее – Обучающийся/Заказчик) о заключении Договора на условиях, изложенных в нем.
**1.2.** Настоящая Оферта является официальным документом и действует в филиалах учебного центра, расположенных по следующим адресам:
* г. Ташкент, Чиланзарский р-н, массив Алмазар, 6/7 (филиал Дружба);
* г. Ташкент, Мирзо-Улугбекский р-н, массив Ирригатор, дом 3 (филиал Дархан);
* г. Ташкент, Шайхантахурский р-н, пер. Фароби, дом 94 (филиал Тинчлик);
* г. Ташкент, Сергелийский р-н, ул. Янги Сергели йули, дом 5 (филиал Сергели);
* г. Ташкент, Юнусабадский р-н, ул. Янгишахар, дом 10 (филиал Юнусабад);
* г. Ташкент, Яккасарайский р-н, Миробод, дом 2 (филиал Ойбек);
* г. Ташкент, Чиланзарский р-н, ул. Мукими, 1А (филиал Новза);
* г. Ташкент, Чиланзарский р-н, 10-й квартал Чиланзора, дом 34 (филиал ИНЯЗ);
* Ферганская область, г. Фергана, МФУ Маърифат, ул. Юксалиш, дом 108-а (филиал Фергана);
* Самаркандская область, г. Самарканд, ул. Шохрух Мирзо, дом 7 (филиал Самарканд);
а также размещена в сети Интернет по веб-адресу megaschool.uz (или ваш актуальный домен).
**1.3.** Предоставление Обучающимся/Заказчиком своих персональных данных (полное имя, дата рождения, номер телефона) в учебный центр осуществляется в администрации учебного центра, на веб-сайте или через MegaSchool App.
**1.4.** В любом из следующих действий Обучающийся/Заказчик считается полностью и безоговорочно принявшим (акцептировавшим) условия оферты:
* В случае оплаты услуг Обучающимся/Заказчиком;
* В случае подтверждения Обучающимся/Заказчиком ознакомления с условиями предложения через личный кабинет в приложении “MegaSchool App” или на веб-сайте.
**1.5.** В соответствии с частью четвертой статьи 370 Гражданского кодекса Республики Узбекистан, принятие Оферты равносильно заключению договора на условиях, указанных в Оферте. Путем принятия (акцепта) настоящей Оферты лицо становится Стороной настоящей Оферты, далее именуемой Обучающийся/Заказчик. Учебный центр и Обучающийся/Заказчик совместно именуются Сторонами по настоящей Оферте, а по отдельности – Стороной.`,
        tags: ["Общие положения", "Договор", "Акцепт", "Филиалы"],
      },
      {
        id: "subject-of-agreement",
        title: "2. Предмет договора",
        content: `**2.1.** Исполнитель обязуется по заданию Обучающегося/Заказчика оказать образовательные услуги по выбранным образовательным программам (далее – «Услуги») в Учебном центре MegaSchool, а Обучающийся/Заказчик обязуется оплатить эти услуги. К образовательным программам относятся, но не ограничиваются ими:
* **Иностранные языки:** Английский язык и другие (по мере их введения);
* **Информационные технологии (IT):** Курсы по фронтенд-разработке, бэкенд-разработке, а также специализированные IT-курсы для детей;
* **Школьные предметы:** Математика, Русский язык, Узбекская литература, а также другие школьные предметы, предлагаемые Учебным центром.
**2.2.** От имени несовершеннолетних в возрасте от тринадцати до восемнадцати лет настоящая оферта может быть акцептирована в качестве Заказчика только их родителями (опекунами, попечителями или иными лицами, которые могут быть законными представителями несовершеннолетних). Для несовершеннолетних до тринадцати лет договор заключается исключительно их законными представителями.
**2.3.** Услуги оказываются в соответствии с «Методикой преподавания Учебного центра MegaSchool», являющейся неотъемлемой частью настоящего Договора.
**2.4.** Учебный центр оказывает услуги в соответствии с действующим прейскурантом, опубликованным на веб-сайте megaschool.uz (или ваш актуальный домен), и Обучающийся/Заказчик производит оплату услуг в соответствии с условиями настоящей Публичной оферты.`,
        tags: ["Предмет", "Услуги", "Оплата", "Методика", "Программы"],
      },
      {
        id: "center-rights-obligations",
        title: "3.1. Права и обязанности Учебного центра",
        content: `**3.1.1.** Учебный центр обязуется организовать и обеспечить надлежащее выполнение услуг, предусмотренных пунктом 2.1 настоящей Публичной оферты.
**3.1.2.** Учебный центр вправе проводить тестирование Обучающегося/Заказчика по окончании этапа обучения и на основании результатов теста переводить его на следующий этап обучения/оставлять на текущем этапе/отказывать в продолжении обучения в соответствии с «Правилами обучения в Учебном центре MegaSchool», а также в одностороннем порядке аннулировать настоящую Оферту.
**3.1.3.** Учебный центр имеет право ограничить доступ к занятиям и личному кабинету студента, не оплатившего обучение в срок. В случае отстранения Обучающегося/Заказчика от занятий, если он желает продолжить пользоваться услугами Учебного центра, произведя оплату, Учебный центр постарается вернуть его в группу, в которой он обучался до отстранения. Однако, в случае отсутствия свободных мест в данной группе или вероятности того, что студент не сможет наверстать пропущенные групповые занятия, Учебный центр вправе прикрепить его к другим новым группам.
**3.1.4.** Учебный центр вправе менять преподавателя на протяжении всего периода обучения без согласия Обучающегося/Заказчика. В случае, если основной преподаватель не может проводить занятия по определенным причинам, учебный центр имеет право назначить замещающего или вспомогательного преподавателя для этих занятий.
**3.1.5.** Учебный центр имеет право не менять преподавателя, даже если Обучающийся/Заказчик этого требует.
**3.1.6.** Изменение расписания занятий, учебных групп и филиала, в котором проводятся учебные занятия, осуществляется по согласованию сторон. Изменение учебных помещений решается учебным центром самостоятельно.
**3.1.7.** Если в группе останется менее 7 учащихся, Учебный центр имеет право закрыть группу и распределить учащихся по другим группам.
**3.1.8.** Если Обучающийся/Заказчик пропускает занятия, Учебный центр не осуществляет операции по переводу произведенных им платежей за пропущенные занятия на счет другого лица.
**3.1.9.** Учебный центр вправе самостоятельно выбирать формы, порядок и периодичность осуществления учебного процесса, систем оценивания, проверки знаний Обучающегося.
**3.1.10.** Если Обучающийся/Заказчик нарушил закон, условия настоящей Оферты и общепринятые нормы в течение срока действия настоящей Оферты, Учебный центр вправе отстранить Обучающегося/Заказчика от занятий/ограничить доступ к личному кабинету.
**3.1.11.** Если доказательствами и свидетелями будет подтверждено, что Обучающийся/Заказчик оскорбил сотрудников Учебного центра или других Обучающихся/Заказчиков в устной или письменной форме в процессе обучения, Учебный центр вправе отстранить Обучающегося/Заказчика от занятий/ограничить доступ к личному кабинету.
**3.1.12.** Если Обучающийся/Заказчик 3 раза по ходу курса покажет неудовлетворительный результат на итоговых экзаменах, и причиной провала будет установлено недостаточное усердие студента, то договор, заключенный со студентом, может быть расторгнут на срок один год, и он может быть отстранен от занятий на один год.
**3.1.13.** Если Обучающийся/Заказчик не сможет достичь минимального результата усвоения материала, установленного учебным центром в течение месяца, Учебный центр имеет право отстранить Обучающегося/Заказчика от группы. Если это условие будет нарушено 3 раза в течение курса, Обучающийся/Заказчик лишается права обучаться в учебном центре. Минимальный результат усвоения материала по неделям должен быть следующим:
* К концу 4-й недели 15%
* К концу 8-й недели 30%
* К концу 12-й недели 45%
**3.1.14.** Настоящая Публичная Оферта может быть изменена Учебным центром. Внесенные изменения считаются вступившими в силу с момента их публикации в качестве части текста Публичной Оферты на веб-сайте Учебного центра. Соответственно, внесенные изменения не влияют на старые договоры. При заключении новых договоров или обновлении старых после внесения изменений, внесенные изменения становятся частью договора.`,
        tags: ["Права центра", "Обязанности центра", "Дисциплина", "Изменения"],
      },
      {
        id: "student-rights-obligations",
        title: "3.2. Права и обязанности Обучающегося/Заказчика",
        content: `**3.2.1.** Обучающийся/Заказчик обязан ознакомиться с содержанием и условиями настоящей оферты, а также с прейскурантом услуг Учебного центра, размещенным на веб-сайте megaschool.uz (или ваш актуальный домен), до заключения Договора и осуществления оплаты.
**3.2.2.** Осуществление первоначального платежа Обучающимся/Заказчиком означает ознакомление и принятие Обучающимся/Заказчиком условий настоящей Оферты.
**3.2.3.** Обучающийся/Заказчик обязан производить оплату за учебные занятия до 5-го числа каждого месяца.
**3.2.4.** Обучающийся/Заказчик обязан выполнять самостоятельные задания, данные преподавателем по подготовке к занятиям, и участвовать в занятиях в соответствии с утвержденным расписанием.
**3.2.5.** Обучающийся/Заказчик обязуется не распространять материалы и информацию, предоставленные в рамках обучения (в бумажном, электронном или ином виде) в коммерческих или некоммерческих целях (в виде копирования, публикации, размещения на Интернет-ресурсах, передачи третьим лицам или перепродажи), не создавать коммерческие продукты на основе полученных материалов и не использовать данную информацию любым способом, кроме личного использования.
**3.2.6.** Если Обучающийся/Заказчик решит перейти в другую группу из предложенных вариантов в связи с расформированием группы, то Обучающийся/Заказчик обязуется произвести оплату за курс и продолжить обучение в этой группе.
**3.2.7.** Обучающийся/Заказчик обязуется соблюдать «Правила обучения в Учебном центре MegaSchool» (указанные в Приложении 2 к настоящей Оферте или доступные на веб-сайте).
**3.2.8.** Обучающийся/Заказчик обязуется не передавать третьим лицам учебно-методические материалы, выданные Учебным центром, и право доступа к учебному процессу Учебного центра.
**3.2.9.** По первому требованию Учебного центра любой материальный ущерб, причиненный имуществу Учебного центра Обучающимся/Заказчиком, взыскивается со студента в полном объеме.
**3.2.10.** Обучающийся/Заказчик должен соблюдать общепринятые нормы этики и поведения на территории Учебного центра. (Прослушивание громкой музыки, просмотр видео и фильмов, создание шума, употребление табачных изделий на территории учебного центра запрещено).
**3.2.11.** Если Обучающийся/Заказчик 3 раза по ходу курса покажет неудовлетворительный результат на итоговых экзаменах, и причиной провала будет установлено недостаточное усердие студента, то договор, заключенный со студентом, может быть расторгнут на срок один год, и он может быть отстранен от занятий на один год.
**3.2.12.** Если Обучающийся/Заказчик не сможет достичь минимального результата усвоения материала, установленного учебным центром в течение месяца, Учебный центр имеет право отстранить Обучающегося/Заказчика от группы. Если это условие будет нарушено 3 раза в течение курса, Обучающийся/Заказчик лишается права обучаться в учебном центре. Минимальный результат усвоения материала по неделям должен быть следующим:
* К концу 4-й недели 15%
* К концу 8-й недели 30%
* К концу 12-й недели 45%
**3.2.13.** Обучающийся/Заказчик обязан правильно использовать имущество Учебного центра в целях осуществления учебных занятий.`,
        tags: ["Права ученика", "Обязанности ученика", "Оплата", "Поведение"],
      },
    ],
  },
  en: {
    filterSelector: {
      open: "Open filter",
      close: "Close filter",
    },
    title:
      "PUBLIC OFFER FOR THE PROVISION OF EDUCATIONAL SERVICES BY MEGASCHOOL TRAINING CENTER",
    sections: [
      {
        id: "definitions",
        title: "Terms and Definitions",
        content: `**Public Offer** – This is an offer to conclude an agreement. The agreement is concluded by unconditional acceptance of the offer (its acceptance).
**Acceptance of the Offer** – The full and unconditional acceptance of the actions specified in clause 1.3. of this Offer. Acceptance of the Offer leads to the conclusion of the Agreement.
**Performer / Training Center** – A legal entity providing educational services based on relevant license/confirmation No. [Insert License Number], issued on [Insert License Issue Date].
**Student/Customer** – An individual who has accepted the terms of this agreement (accepted this offer), being the end-user of the services. In the case of minor Students, their legal representatives act as the Customer.
**MegaSchool App / MegaSchool Learning Platform** – This is the training center's software developed for special mobile platforms (iOS, Android, etc.) or a web interface, designed to provide access to study materials, schedules, academic progress, and interaction with the training center.
**Educational Program / Course** – The process of learning in a specific discipline or direction (e.g., English language, IT courses, Mathematics, Russian language, Uzbek Literature, and other school subjects) according to the training center's methodology for a specified period, selected and approved by the training center and the Student/Customer.
**Website** – The training center's web page located on the Internet information and telecommunication network, accessible via the following domain name (address, domain): https://megaschool.uz (or your actual domain).
**Level Assessment** – A free procedure aimed at determining the level of knowledge or skills of the Student for proper group or program placement.
**MegaSchool Point / Bonus System** – A special points or incentive system introduced to encourage Students/Customers during training sessions or upon achieving certain results.
**MegaSchool Training Center** – A specialized educational building or complex of premises equipped with the necessary equipment, materials, literature, and other material and technical resources for the educational process, where classes are conducted directly.`,
        tags: ["Definitions", "Terms", "Introduction"],
      },
      {
        id: "general-provisions",
        title: "1. General Provisions",
        content: `**1.1.** In accordance with the Civil Code of the Republic of Uzbekistan, this document is an official public offer (oferta) of MegaSchool Training Center (hereinafter – the Training Center) to any individual (hereinafter – the Student/Customer) for concluding an Agreement on the terms specified therein.
**1.2.** This Offer is an official document and is valid at the training center's branches located at the following addresses:
* Tashkent city, Chilanzar district, Olmazor block, 6/7 (Drujba branch);
* Tashkent city, Mirzo Ulugbek district, Irrigator block, house 3 (Darkhan branch);
* Tashkent city, Shaykhantakhur district, Farobi blind alley, house 94 (Tinchlik branch);
* Tashkent city, Sergeli district, Yangi Sergeli yoli street, house 5 (Sergeli branch);
* Tashkent city, Yunusabad district, Yangishahar street, house 10 (Yunusabad branch);
* Tashkent city, Yakkasaray district, Mirobod, house 2 (Oybek branch);
* Tashkent city, Chilanzar district, Mukimi street, 1A (Novza branch);
* Tashkent city, Chilanzar district, Chilanzar 10th quarter, house 34 (Inyaz branch);
* Fergana region, Fergana city, Ma'rifat MFY, Yuksalish street, 108-a (Fergana branch);
* Samarkand region, Samarkand city, Shokhrukh Mirzo street, house 7 (Samarkand branch);
and is also posted on the Internet at the web address megaschool.uz (or your actual domain).
**1.3.** The Student/Customer's provision of personal data (full name, date of birth, phone number) to the training center is carried out at the training center's administration, on the website, or through the MegaSchool App.
**1.4.** In any of the following actions, the Student/Customer is considered to have fully and unconditionally accepted (acknowledged) the terms of the offer:
* If payment for services is made by the Student/Customer;
* If the Student/Customer confirms acquaintance with the terms of the offer through their personal account in the “MegaSchool App” or on the website.
**1.5.** In accordance with part four of Article 370 of the Civil Code of the Republic of Uzbekistan, acceptance of the Offer is equivalent to concluding an agreement on the terms specified in the Offer. By accepting (acknowledging) this Offer, the person becomes a Party to this Offer, hereinafter referred to as the Student/Customer. The Training Center and the Student/Customer are jointly referred to as Parties to this Offer, and separately as a Party.`,
        tags: ["General Provisions", "Agreement", "Acceptance", "Branches"],
      },
      {
        id: "subject-of-agreement",
        title: "2. Subject of the Agreement",
        content: `**2.1.** The Performer undertakes, at the request of the Student/Customer, to provide educational services under the chosen educational programs (hereinafter – «Services») at the MegaSchool Training Center, and the Student/Customer undertakes to pay for these services. Educational programs include, but are not limited to:
* **Foreign Languages:** English language and others (as they are introduced);
* **Information Technologies (IT):** Courses in front-end development, back-end development, and specialized IT courses for children;
* **School Subjects:** Mathematics, Russian Language, Uzbek Literature, as well as other school subjects offered by the Training Center.
**2.2.** On behalf of minors aged thirteen to eighteen, this offer can only be accepted as a Customer by their parents (guardians, trustees, or other persons who may be legal representatives of minors). For minors under thirteen years of age, the agreement is concluded exclusively by their legal representatives.
**2.3.** Services are provided in accordance with the «MegaSchool Training Center's Teaching Methodology», which is an integral part of this Agreement.
**2.4.** The Training Center provides services in accordance with the current price list published on the megaschool.uz website (or your actual domain), and the Student/Customer makes payment for services in accordance with the terms of this Public Offer.`,
        tags: ["Subject", "Services", "Payment", "Methodology", "Programs"],
      },
      {
        id: "center-rights-obligations",
        title: "3.1. Rights and Obligations of the Training Center",
        content: `**3.1.1.** The Training Center undertakes to organize and ensure the proper execution of the services stipulated in clause 2.1 of this Public Offer.
**3.1.2.** The Training Center has the right to test the Student/Customer at the end of each educational stage and, based on the test results, transfer them to the next educational stage/retain them in the current stage/refuse further study in accordance with the «Rules for Education at MegaSchool Training Center», and may unilaterally cancel this Offer.
**3.1.3.** The Training Center has the right to restrict access to classes and the personal account of a student who has not paid for tuition on time. In case the Student/Customer is suspended from classes, if they wish to continue using the Training Center's services by making payments, the Training Center will try to return them to the group they were studying in before the suspension. However, if there are no vacant places in that group or if there is a possibility that the student will not be able to catch up with the missed group lessons, the Training Center has the right to assign them to other new groups.
**3.1.4.** The Training Center has the right to change the teacher throughout the entire period of study without the consent of the Student/Customer. If the main teacher is unable to conduct classes for certain reasons, the training center has the right to appoint a substitute or assistant teacher for those classes.
**3.1.5.** The Training Center has the right not to change the teacher, even if the Student/Customer requests it.
**3.1.6.** Changes to the class schedule, study groups, and the branch where classes are held are made by agreement of the parties. Changes to classrooms are decided by the training center independently.
**3.1.7.** If fewer than 7 students remain in a group, the Training Center has the right to close the group and redistribute the students to other groups.
**3.1.8.** If the Student/Customer misses classes, the Training Center does not carry out transactions to transfer payments made for missed classes to another person's account.
**3.1.9.** The Training Center has the right to independently choose the forms, order, and periodicity of the educational process, assessment systems, and methods of testing Student knowledge.
**3.1.10.** If the Student/Customer violates the law, the terms of this Offer, and generally accepted norms during the validity period of this Offer, the Training Center has the right to suspend the Student/Customer from classes/restrict access to the personal account.
**3.1.11.** If it is proven by evidence and witnesses that the Student/Customer verbally or in writing insulted Training Center staff or other Students/Customers during the educational process, the Training Center has the right to suspend the Student/Customer from classes/restrict access to the personal account.
**3.1.12.** If the Student/Customer records an unsatisfactory result on the final exams 3 times during the course, and the reason for failure is found to be insufficient effort by the student, the contract concluded with the student may be terminated for a period of one year, and they may be suspended from classes for one year.
**3.1.13.** If the Student/Customer fails to achieve the minimum assimilation result set by the training center during the month, the Training Center has the right to expel the Student/Customer from the group. If this condition is violated 3 times during the course, the Student/Customer loses the right to study at the training center. The minimum assimilation result over the weeks should be as follows:
* By the end of week 4: 15%
* By the end of week 8: 30%
* By the end of week 12: 45%
**3.1.14.** This Public Offer may be amended by the Training Center. The introduced changes are considered effective from the moment of their publication as part of the text of the Public Offer on the Training Center's website. Accordingly, the introduced changes do not affect old agreements. When new agreements are concluded or old agreements are renewed after changes have been made, the introduced changes become part of the agreement.`,
        tags: [
          "Center Rights",
          "Center Obligations",
          "Discipline",
          "Amendments",
        ],
      },
      {
        id: "student-rights-obligations",
        title: "3.2. Rights and Obligations of the Student/Customer",
        content: `**3.2.1.** The Student/Customer is obliged to familiarize themselves with the content and terms of this offer, as well as with the price list of the Training Center's services published on the megaschool.uz website (or your actual domain), before concluding the Agreement and making payment.
**3.2.2.** Making the initial payment by the Student/Customer signifies the Student/Customer's familiarity with and acceptance of the terms of this Offer.
**3.2.3.** The Student/Customer is obliged to make payment for educational sessions by the 5th of each month.
**3.2.4.** The Student/Customer is obliged to complete independent assignments given by the teacher for class preparation and to participate in classes according to the approved schedule.
**3.2.5.** The Student/Customer undertakes not to distribute materials and information provided within the scope of education (in paper, electronic, or other forms) for commercial or non-commercial purposes (in the form of copying, publishing, posting on Internet resources, transferring to third parties, or reselling), not to create commercial products based on the received materials, and not to use this information in any way other than for personal use.
**3.2.6.** If the Student/Customer decides to transfer to another group from the offered options due to the disbandment of a group, then the Student/Customer undertakes to pay for the course and continue studying in that group.
**3.2.7.** The Student/Customer undertakes to comply with the «Rules for Education at MegaSchool Training Center» (specified in Appendix 2 to this Offer or available on the website).
**3.2.8.** The Student/Customer undertakes not to transfer to third parties the educational and methodological materials provided by the Training Center, and the right to access the Training Center's educational process.
**3.2.9.** Upon the first demand of the Training Center, any material damage caused to the Training Center's property by the Student/Customer shall be fully recovered from the student.
**3.2.10.** The Student/Customer must observe generally accepted norms of ethics and behavior on the premises of the Training Center. (Loud music listening, watching videos and films, making noise, and consuming tobacco products on the training center premises are prohibited).
**3.2.11.** If the Student/Customer records an unsatisfactory result on the final exams 3 times during the course, and the reason for failure is found to be insufficient effort by the student, the contract concluded with the student may be terminated for a period of one year, and they may be suspended from classes for one year.
**3.2.12.** If the Student/Customer fails to achieve the minimum assimilation result set by the training center during the month, the Training Center has the right to expel the Student/Customer from the group. If this condition is violated 3 times during the course, the Student/Customer loses the right to study at the training center. The minimum assimilation result over the weeks should be as follows:
* By the end of week 4: 15%
* By the end of week 8: 30%
* By the end of week 12: 45%
**3.2.13.** The Student/Customer must properly use the Training Center's property for the purpose of conducting educational activities.`,
        tags: ["Student Rights", "Student Obligations", "Payment", "Behavior"],
      },
    ],
  },
  uz: {
    filterSelector: {
      open: "Filtrni ochish",
      close: "Filtrni yopish",
    },
    title:
      "MEGASCHOOL O‘QUV MARKAZI TOMONIDAN TA’LIM XIZMATLARINI TAQDIM ETISHTO‘G‘RISIDA OMMAVIY OFЕRTA",
    sections: [
      {
        id: "definitions",
        title: "Atama va ta’riflar",
        content: `**Ommaviy oferta** – bu shartnoma tuzish bo‘yicha taklif. Shartnoma ofertani (uning akseptini) shartsiz qabul qilish orqali tuziladi.
**Ofertaning aksepti** – ushbu Ofertaning 1.3. bandiga ko‘rsatilgan harakatlarni to‘liq yoki hech qanday shartlarsiz qabul qilish. Ofertaning aksepti Shartnoma tuzilishiga sababchi bo‘ladi.
**Bajaruvchi / O’quv markaz** – tegishli litsenziya/tasdiqnoma № [Litsenziya raqamini kiriting], [Litsenziya berilgan sanasini kiriting] sanasida berilgan hujjat asosida ta’lim xizmatlarini taqdim etuvchi yuridik shaxs.
**O‘quvchi/Buyurtmachi** – ushbu shartnoma shartlarini qabul qilgan (ushbu ofertani akseptlagan) jismoniy shaxs, xizmatlarning oxirgi foydalanuvchisi. Voyaga yetmagan O‘quvchilar holatida, Buyurtmachi ularning qonuniy vakillari hisoblanadi.
**MegaSchool App / MegaSchool Ta’lim Platformasi** - bu o’quv markazining dasturiy ta’minoti hisoblanib, maxsus mobil platformalari uchun ishlab chiqilgan bo’lib (iOS, Android va boshqalar) yoki o‘quv materiallari, dars jadvali, o‘zlashtirish va o‘quv markazi bilan o‘zaro aloqa uchun mo‘ljallangan veb-interfeys.
**Ta’lim dasturi / Kurs** - o’quv markazi hamda O’quvchi/Buyurtmachi tomonidan tanlangan va tasdiqlangan muayyan vaqt davomida o’quv markazining metodikasi bo’yicha ma’lum bir fan yoki yo‘nalish (masalan, ingliz tili, IT-kurslar, matematika, rus tili, o‘zbek adabiyoti va boshqa maktab fanlari) bo'yicha o'qitish jarayoni.
**Web-site** - o’quv markazining internet axborot-telekommunikatsiya tarmog'ida joylashgan veb sahifasi bo’lib quyidagi domen nomi (manzil, domen) orqali kirish mumkin:https://megaschool.uz (yoki amaldagi domeningiz).
**Daraja testlari** - o‘quvchining bilim yoki ko‘nikma darajasini aniqlashga qaratilgan bepul protsedura bo‘lib, to‘g‘ri guruh yoki dasturga joylashtirish uchun xizmat qiladi.
**MegaSchool Point / Bonus tizimi** - O’quvchi/Buyurtmachi o’quv mashg’ulotlari davomida yoki ma’lum natijalarga erishganda rag’batlantirish uchun yo’lga qo’yilgan maxsus ballar yoki mukofot tizimi.
**MegaSchool o‘quv markazi** – o‘quv jarayoni uchun zarur bo‘lgan jihozlar, materiallar, adabiyotlar va boshqa moddiy-texnika vositalari bilan jihozlangan, darslar bevosita o‘tkaziladigan maxsus o‘quv binosi yoki binolar majmuasi.`,
        tags: ["Atamalar", "Ta'riflar", "Kirish"],
      },
      {
        id: "general-provisions",
        title: "1. Umumiy qoidalar",
        content: `**1.1.** O‘zbekiston Respublikasining Fuqarolik kodeksiga asosan ushbu hujjat MegaSchool O‘quv markazining (keyinchalik matnda O‘quv markazi deb nomlanadi) har qanday jismoniy shaxsga (keyinchalik matnda O‘quvchi/Buyurtmachi deb nomlanadi) nisbatan Shartnomani unda keltirilgan shartlar asosida qabul qilishga yo‘naltirilgan rasmiy ommaviy taklifi (ofertasi) hisoblanadi.
**1.2.** Ushbu Oferta rasmiy hujjat hisoblanadi va o‘quv markazining quyida ko‘rsatilgan manzillarda joylashgan filiallarda amalga oshiriladi:
* Toshkent shahri, Chilonzor t., Olmazor m-si, 6/7 (Drujba f-li);
* Toshkent shahri, Mirzo Ulug‘bek t., Irrigator m-si, 3 - uy (Darxon f-li);
* Toshkent shahri, Shayxontohur t, Farobiy berk ko’chasi 94 - uy (Tinchlik f-li);
* Toshkent shahri, Sergeli t, Yangi Sergeli yo‘li ko’chasi, 5 - uy (Sergeli f-li);
* Toshkent shahri, Yunusobod t., Yangishahar ko’chasi 10 - uy (Yunusobod f-li);
* Toshkent shahri, Yakkasaroy t., Mirobod 2 - uy (Oybek f-li);
* Toshkent shahri, Chilonzor t., Muqimiy ko’chasi, 1A - uy (Novza f-li);
* Toshkent shahri, Chilonzor t., Chilonzor 10-kvartal, 34-uy (Inyaz f-li);
* Farg’ona viloyati, Farg’ona shahri, Ma’rifat MFY, Yusalish ko’chasi, 108-a-uy (Farg’ona f-li);
* Samarqand viloyati, Samarqand shahri, Shohrux Mirzo ko’chasi, 7-uy (Samarqand f-li)
shuningdek, megaschool.uz (yoki amaldagi domeningiz) veb-manzili bo‘yicha internet tarmog‘ida joylashtirilgan.
**1.3.** O‘quvchi/Buyurtmachi tomonidan o‘z shaxsiga doir ma’lumotlarni o‘quv markaziga taqdim etish (to‘liq ism, tug‘ilgan sana, telefon raqami) o’quv markazi administratsiyasida, veb-saytda yoki MegaSchool App orqali amalga oshiriladi.
**1.4.** Quyidagi har qanday harakatlarning birida O‘quvchi/Buyurtmachi oferta shartlarini to'liq va shartsiz qabul qilgan (akseptlagan) hisoblanadi:
* Xizmatlar uchun O‘quvchi/Buyurtmachi tomonidan to‘lov amalga oshirilgan taqdirda;
* O‘quvchi/Buyurtmachi tomonidan “MegaSchool App” ilovasidagi yoki veb-saytdagi shaxsiy kabinet orqali taklif shartlari bilan tanishganligini tasdiqlagan taqdirda.
**1.5.** O‘zbekiston Respublikasining Fuqarolik kodeksining 370-moddasi to‘rtinchi qismiga muvofiq, Ofertaning qabul qilinishi Ofertada ko‘rsatilgan shartlar asosida shartnoma tuzishga tengdir. Ushbu Oferta qabul qilinishi (aksepti) orqali shaxs ushbu Ofertaning Tomoni, keyinchalik O‘quvchi/Buyurtmachi deb ataladi. O‘quv markazi va O‘quvchi/Buyurtmachi birgalikda ushbu Oferta bo‘yicha Tomonlar, alohida esa Tomon deb ataladi.`,
        tags: ["Atamalar", "Ta'riflar", "Kirish"],
      },
      {
        id: "subject-of-agreement",
        title: "2. Shartnoma predmeti",
        content: `**2.1.** Ijrochi O‘quvchi/Buyurtmachining topshirig‘i bo‘yicha MegaSchool O‘quv markazida tanlangan ta’lim dasturlari bo‘yicha ta’lim xizmatlarini (keyinchalik – «Xizmatlar») ko‘rsatishni o‘z zimmasiga oladi, O‘quvchi/Buyurtmachi esa ushbu xizmatlar uchun to‘lovni amalga oshirishni o‘z zimmasiga oladi. Ta’lim dasturlari quyidagilarni o'z ichiga oladi, ammo ular bilan cheklanmaydi:
* **Xorijiy tillar:** Ingliz tili va boshqalar (joriy etilishi bilan);
* **Axborot texnologiyalari (IT):** Frontend-ishlab chiqish, backend-ishlab chiqish bo‘yicha kurslar, shuningdek, bolalar uchun ixtisoslashtirilgan IT-kurslar;
* **Maktab fanlari:** Matematika, Rus tili, O‘zbek adabiyoti, shuningdek, O‘quv markazi tomonidan taklif etilayotgan boshqa maktab fanlari.
**2.2.** O‘n uch yoshdan o‘n sakkiz yoshgacha bo‘lgan voyaga yetmaganlar nomidan ushbu oferta Buyurtmachi sifatida faqat ularning ota-onalari (vasiylari, homiylari yoki voyaga yetmaganlarning qonuniy vakillari bo‘lishi mumkin bo‘lgan boshqa shaxslar) tomonidan aksept qilinishi mumkin. O‘n uch yoshgacha bo‘lgan voyaga yetmaganlar uchun shartnoma faqat ularning qonuniy vakillari tomonidan tuziladi.
**2.3.** Xizmatlar ushbu Shartnomaning ajralmas qismi hisoblangan «MegaSchool O‘quv markazining o‘qitish metodikasi»ga muvofiq ko‘rsatiladi.
**2.4.** O‘quv markazi xizmatlarni megaschool.uz (yoki amaldagi domeningiz) veb-saytida e’lon qilingan amaldagi narxlar ro‘yxatiga muvofiq ko‘rsatadi va O‘quvchi/Buyurtmachi xizmatlar uchun ushbu Ommaviy oferta shartlariga muvofiq to‘lovni amalga oshiradi.`,
        tags: ["Predmet", "Xizmatlar", "To'lov", "Metodika", "Dasturlar"],
      },
      {
        id: "center-rights-obligations",
        title: "3.1. O‘quv markazining huquqlari va majburiyatlari",
        content: `**3.1.1.** O‘quv markazi ushbu Ommaviy ofertaning 2.1-bandida nazarda tutilgan xizmatlarning tegishli darajada bajarilishini tashkil etish va ta’minlash majburiyatini oladi.
**3.1.2.** O‘quv markazi O‘quvchi/Buyurtmachini bosqich yakunida testdan o‘tkazishga va test natijalariga ko‘ra uni keyingi o‘qitish bosqichiga o‘tkazish/joriy bosqichda qoldirish/«MegaSchool O‘quv markazida o‘qish qoidalari»ga muvofiq o‘qishni davom ettirishdan voz kechish huquqiga ega, shuningdek, ushbu Oferta bir tomonlama tartibda bekor qilinishi mumkin.
**3.1.3.** O‘quv markazi o‘qish uchun o‘z vaqtida to‘lovni amalga oshirmagan talabaning darslarga va shaxsiy kabinetiga kirishini cheklash huquqiga ega. Agar O‘quvchi/Buyurtmachi darslardan chetlashtirilgan bo‘lsa, u to‘lovni amalga oshirib, O‘quv markazi xizmatlaridan foydalanishni davom ettirishni istasa, O‘quv markazi uni chetlashtirilgunga qadar o‘qigan guruhiga qaytarishga harakat qiladi. Biroq, ushbu guruhda bo‘sh joylar mavjud bo‘lmasa yoki talabaning o‘tkazib yuborilgan guruh darslarini o‘zlashtira olmasligi ehtimoli bo‘lsa, O‘quv markazi uni boshqa yangi guruhlarga biriktirish huquqiga ega.
**3.1.4.** O‘quv markazi butun o‘qish davrida O‘quvchi/Buyurtmachining roziligisiz o‘qituvchini o‘zgartirish huquqiga ega. Agar asosiy o‘qituvchi ma’lum sabablarga ko‘ra darslarni o‘ta olmasa, o‘quv markazi ushbu darslar uchun o‘rinbosar yoki yordamchi o‘qituvchini tayinlash huquqiga ega.
**3.1.5.** O‘quv markazi, hatto O‘quvchi/Buyurtmachi talab qilsa ham, o‘qituvchini o‘zgartirmaslik huquqiga ega.
**3.1.6.** Dars jadvali, o‘quv guruhlari va o‘quv mashg‘ulotlari o‘tkaziladigan filialni o‘zgartirish tomonlarning kelishuvi bo‘yicha amalga oshiriladi. O‘quv xonalarini o‘zgartirish o‘quv markazi tomonidan mustaqil hal qilinadi.
**3.1.7.** Agar guruhda 7 nafardan kam o‘quvchi qolsa, O‘quv markazi guruhni yopish va o‘quvchilarni boshqa guruhlarga taqsimlash huquqiga ega.
**3.1.8.** Agar O‘quvchi/Buyurtmachi darslarni o‘tkazib yuborsa, O‘quv markazi uning o‘tkazib yuborilgan darslar uchun to‘lagan to‘lovlarini boshqa shaxsning hisobiga o‘tkazish operatsiyalarini amalga oshirmaydi.
**3.1.9.** O‘quv markazi o‘quv jarayonini amalga oshirish shakllarini, tartibini va davriyligini, baholash tizimlarini, O‘quvchining bilimlarini tekshirish usullarini mustaqil tanlash huquqiga ega.
**3.1.10.** Agar O‘quvchi/Buyurtmachi ushbu Ofertaning amal qilish muddati davomida qonunni, ushbu Oferta shartlarini va umumiy qabul qilingan normalarni buzsa, O‘quv markazi O‘quvchi/Buyurtmachini darslardan chetlashtirish/shaxsiy kabinetiga kirishni cheklash huquqiga ega.
**3.1.11.** Agar O‘quvchi/Buyurtmachi o‘qish jarayonida O‘quv markazi xodimlarini yoki boshqa O‘quvchi/Buyurtmachilarni og‘zaki yoki yozma ravishda haqorat qilganligi dalillar va guvohlar tomonidan tasdiqlansa, O‘quv markazi O‘quvchi/Buyurtmachini darslardan chetlashtirish/shaxsiy kabinetiga kirishni cheklash huquqiga ega.
**3.1.12.** Agar O‘quvchi/Buyurtmachi kurs davomida yakuniy imtihonlarda 3 marta qoniqarsiz natija ko‘rsatsa va muvaffaqiyatsizlikka sabab talabaning yetarli darajada tirishqoq emasligi aniqlansa, talaba bilan tuzilgan shartnoma bir yil muddatga bekor qilinishi va u bir yil muddatga darslardan chetlashtirilishi mumkin.
**3.1.13.** Agar O‘quvchi/Buyurtmachi bir oy davomida o‘quv markazi tomonidan belgilangan materialni o‘zlashtirishning minimal natijasiga erisha olmasa, O‘quv markazi O‘quvchi/Buyurtmachini guruhdan chetlatish huquqiga ega. Agar bu shart kurs davomida 3 marta buzilsa, O‘quvchi/Buyurtmachi o‘quv markazida o‘qish huquqidan mahrum bo‘ladi. Haftalar bo‘yicha materialni o‘zlashtirishning minimal natijasi quyidagicha bo‘lishi kerak:
* 4-hafta oxiriga kelib 15%
* 8-hafta oxiriga kelib 30%
* 12-hafta oxiriga kelib 45%
**3.1.14.** Ushbu Ommaviy Oferta O‘quv markazi tomonidan o‘zgartirilishi mumkin. Kiritilgan o‘zgarishlar Ommaviy Oferta matnining bir qismi sifatida O‘quv markazining veb-saytida e’lon qilingan paytdan boshlab kuchga kirgan hisoblanadi. Shunga ko‘ra, kiritilgan o‘zgarishlar eski shartnomalarga ta’sir qilmaydi. Yangi shartnomalar tuzilganda yoki o‘zgarishlar kiritilgandan keyin eskilar yangilanganda, kiritilgan o‘zgarishlar shartnomaning bir qismiga aylanadi.`,
        tags: [
          "Markaz huquqlari",
          "Markaz majburiyatlari",
          "Intizom",
          "O'zgarishlar",
        ],
      },
      {
        id: "student-rights-obligations",
        title: "3.2. O‘quvchi/Buyurtmachining huquqlari va majburiyatlari",
        content: `**3.2.1.** O‘quvchi/Buyurtmachi Shartnoma tuzish va to‘lovni amalga oshirishdan oldin ushbu ofertaning mazmuni va shartlari, shuningdek, megaschool.uz (yoki amaldagi domeningiz) veb-saytida joylashtirilgan O‘quv markazi xizmatlarining narxlar ro‘yxati bilan tanishish majburiyatini oladi.
**3.2.2.** O‘quvchi/Buyurtmachi tomonidan dastlabki to‘lovni amalga oshirish O‘quvchi/Buyurtmachining ushbu Oferta shartlari bilan tanishganligini va ularni qabul qilganligini bildiradi.
**3.2.3.** O‘quvchi/Buyurtmachi har oyning 5-sanasigacha o‘quv mashg‘ulotlari uchun to‘lovni amalga oshirish majburiyatini oladi.
**3.2.4.** O‘quvchi/Buyurtmachi o‘qituvchi tomonidan darslarga tayyorgarlik ko‘rish uchun berilgan mustaqil topshiriqlarni bajarish va tasdiqlangan jadvalga muvofiq darslarda ishtirok etish majburiyatini oladi.
**3.2.5.** O‘quvchi/Buyurtmachi o‘qitish doirasida taqdim etilgan materiallar va ma’lumotlarni (qog‘oz, elektron yoki boshqa shaklda) tijorat yoki notijorat maqsadlarida tarqatmaslik (nusxalash, nashr etish, Internet-resurslarga joylashtirish, uchinchi shaxslarga uzatish yoki qayta sotish ko‘rinishida), olingan materiallar asosida tijorat mahsulotlarini yaratmaslik va ushbu ma’lumotlardan shaxsiy foydalanishdan tashqari boshqa har qanday tarzda foydalanmaslik majburiyatini oladi.
**3.2.6.** Agar O‘quvchi/Buyurtmachi guruh tarqalib ketishi sababli taklif qilingan variantlardan boshqa guruhga o‘tishga qaror qilsa, O‘quvchi/Buyurtmachi kurs uchun to‘lovni amalga oshirish va ushbu guruhda o‘qishni davom ettirish majburiyatini oladi.
**3.2.7.** O‘quvchi/Buyurtmachi «MegaSchool O‘quv markazida o‘qish qoidalari»ga (ushbu Ofertaning 2-ilovasida ko‘rsatilgan yoki veb-saytda mavjud) rioya qilish majburiyatini oladi.
**3.2.8.** O‘quvchi/Buyurtmachi O‘quv markazi tomonidan berilgan o‘quv-uslubiy materiallarni va O‘quv markazining o‘quv jarayoniga kirish huquqini uchinchi shaxslarga bermaslik majburiyatini oladi.
**3.2.9.** O‘quv markazining birinchi talabi bilan O‘quvchi/Buyurtmachi tomonidan O‘quv markazi mol-mulkiga yetkazilgan har qanday moddiy zarar talabadan to‘liq undiriladi.
**3.2.10.** O‘quvchi/Buyurtmachi O‘quv markazi hududida umumiy qabul qilingan etika va xulq-atvor normalariga rioya qilishi shart. (O‘quv markazi hududida baland ovozda musiqa tinglash, video va filmlar ko‘rish, shovqin solish, tamaki mahsulotlarini iste’mol qilish taqiqlanadi).
**3.2.11.** Agar O‘quvchi/Buyurtmachi kurs davomida yakuniy imtihonlarda 3 marta qoniqarsiz natija ko‘rsatsa va muvaffaqiyatsizlikka sabab talabaning yetarli darajada tirishqoq emasligi aniqlansa, talaba bilan tuzilgan shartnoma bir yil muddatga bekor qilinishi va u bir yil muddatga darslardan chetlashtirilishi mumkin.
**3.2.12.** Agar O‘quvchi/Buyurtmachi bir oy davomida o‘quv markazi tomonidan belgilangan materialni o‘zlashtirishning minimal natijasiga erisha olmasa, O‘quv markazi O‘quvchi/Buyurtmachini guruhdan chetlatish huquqiga ega. Agar bu shart kurs davomida 3 marta buzilsa, O‘quvchi/Buyurtmachi o‘quv markazida o‘qish huquqidan mahrum bo‘ladi. Haftalar bo‘yicha materialni o‘zlashtirishning minimal natijasi quyidagicha bo‘lishi kerak:
* 4-hafta oxiriga kelib 15%
* 8-hafta oxiriga kelib 30%
* 12-hafta oxiriga kelib 45%
**3.2.13.** O‘quvchi/Buyurtmachi o‘quv mashg‘ulotlarini amalga oshirish maqsadida O‘quv markazi mol-mulkidan to‘g‘ri foydalanishi shart.`,
        tags: [
          "O'quvchi huquqlari",
          "O'quvchi majburiyatlari",
          "To'lov",
          "Xulq-atvor",
        ],
      },
    ],
  },
};

const OfferPage = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const lang = i18n.language;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [isFilterSectionExpanded, setIsFilterSectionExpanded] = useState(false);

  const filterContentRef = useRef(null);

  const currentOffer = useMemo(() => {
    return offerContent[lang] || offerContent[i18n.options.fallbackLng];
  }, [lang, i18n.options.fallbackLng]);

  const allTags = useMemo(() => {
    if (!currentOffer || !currentOffer.sections) return [];
    const tags = new Set();
    currentOffer.sections.forEach((section) => {
      section.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [currentOffer]);

  const filteredSections = useMemo(() => {
    if (!currentOffer || !currentOffer.sections) return [];
    let sections = currentOffer.sections;

    if (selectedTag) {
      sections = sections.filter((section) =>
        section.tags.includes(selectedTag)
      );
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      sections = sections.filter(
        (section) =>
          section.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          section.content.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    return sections;
  }, [currentOffer, searchTerm, selectedTag]);

  const renderContent = (content) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("* ")) {
        return (
          <li key={index} className="ml-5 list-disc text-text-sub">
            {line.substring(2)}
          </li>
        );
      }
      return (
        <p
          key={index}
          className="mb-2 text-text-sub"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        ></p>
      );
    });
  };

  if (!currentOffer || !currentOffer.sections) {
    return (
      <div className="text-center py-20 text-text-sub">
        {t("loadingContent")}
      </div>
    );
  }

  const lastUpdatedDate = new Date().toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={`min-h-screen bg-page-bg text-text-main transition-colors duration-500 ease-in-out`}
    >
      <div className="container mx-auto max-w-4xl bg-card-bg  rounded-2xl p-6 sm:p-10 my-8 transition-all duration-500 ease-in-out transform hover:scale-[1.005]">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-accent-blue leading-tight transition-colors duration-500 ease-in-out">
            {currentOffer.title}
          </h1>
        </header>

        {/* Search and Expandable Filter Section */}
        <div className="mb-10 p-5 bg-card-bg rounded-xl shadow-inner transition-colors duration-500 ease-in-out flex flex-col gap-4">
          {/* Поле поиска */}
          <input
            type="text"
            placeholder={t("offerPage.searchPlaceholder")}
            className="w-full p-3 rounded-lg border border-border-base bg-page-bg text-text-main placeholder-text-sub focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all duration-300 ease-in-out transform focus:scale-[1.005]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Кнопка-триггер для расширения/сворачивания фильтра */}
          <button
            onClick={() => setIsFilterSectionExpanded(!isFilterSectionExpanded)}
            // Обновленные классы для ховера и активного состояния
            className={`w-full px-5 py-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 shadow-sm
              ${
                isFilterSectionExpanded
                  ? // Состояние: РАЗВЕРНУТО (Активно)
                    "bg-blue-900 text-white hover:bg-blue-900/90"
                  : // Состояние: СВЕРНУТО (Неактивно)
                    "bg-page-bg text-text-main border border-border-base hover:bg-select-hover hover:text-blue-900 hover:border-blue-900"
              }
              active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-900`}
          >
            <span>
              {isFilterSectionExpanded
                ? t("offerPage.hideTopics")
                : t("offerPage.showTopics")}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform duration-300
                ${
                  isFilterSectionExpanded
                    ? "rotate-180 text-white"
                    : "text-text-main"
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {/* Контейнер с тегами - появляется при расширении */}
          <div
            ref={filterContentRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isFilterSectionExpanded
                ? "max-h-96 opacity-100 pt-4"
                : "max-h-0 opacity-0 pt-0"
            }`}
          >
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {/* Кнопка "Все темы" */}
              <button
                onClick={() => setSelectedTag(null)}
                // Обновленные классы для ховера и активного состояния
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm
                  ${
                    selectedTag === null
                      ? // Состояние: АКТИВНЫЙ (выбран "Все темы")
                        "bg-blue-900 text-white hover:bg-blue-900/90"
                      : // Состояние: НЕАКТИВНЫЙ (ховер или дефолт)
                        "bg-page-bg text-text-main border border-border-base hover:bg-select-hover hover:bg-blue-900"
                  }`}
              >
                {t("offerPage.allTopics")}
              </button>

              {/* Теги */}
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  // Обновленные классы для ховера и активного состояния
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm
                      ${
                        selectedTag === tag
                          ? // Состояние: АКТИВНЫЙ (выбран конкретный тег)
                            "bg-blue-900 text-white hover:bg-blue-900/90"
                          : // Состояние: НЕАКТИВНЫЙ (ховер или дефолт)
                            "bg-page-bg text-text-main border border-border-base hover:bg-select-hover hover:text-blue-900 hover:border-blue-900"
                      }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Offer Sections */}
        {filteredSections.length > 0 ? (
          <div className="space-y-8">
            {filteredSections.map((section, index) => (
              <div
                key={section.id}
                className="p-6 bg-card-bg rounded-xl shadow-md transform transition-all duration-500 ease-in-out hover:scale-[1.01] hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-4 text-text-main transition-colors duration-500 ease-in-out flex items-center">
                  <span className="text-accent-blue mr-2">{index + 1}.</span>{" "}
                  {section.title}
                </h2>
                {renderContent(section.content)}
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      // Для тегов внутри секций, которые не являются активными элементами управления,
                      // оставляем существующий subtle hover эффект изменения opacity.
                      className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-xs font-medium opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer
                      dark:bg-accent-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-text-sub text-xl transition-colors duration-500 ease-in-out">
            {t("offerPage.noResults")}
          </div>
        )}

        <footer className="mt-12 pt-8 border-t border-border-base text-center text-text-sub transition-colors duration-500 ease-in-out">
          <p>{t("offerPage.lastUpdated", { date: lastUpdatedDate })}</p>
        </footer>
      </div>
    </div>
  );
};

export default OfferPage;
