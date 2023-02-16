export const json = {
  questionTitlePattern: "requireNumTitle",
  questionStartIndex: "# A)",
  requiredText: "(*)",
  pages: [
    {
      title: "This is the page {pageno} of {pagecount}.",
      elements: [
        {
          type: "text",
          name: "name",
          title: "Please type your name",
          isRequired: true,
        },
        {
          type: "text",
          name: "email",
          title: "Please type your e-mail",
          isRequired: true,
          validators: [{ type: "email" }],
        },
      ],
    },
    {
      title: "This is the page {pageno} of {pagecount}.",
      elements: [
        {
          type: "comment",
          name: "comment",
          title: "{name}, please tell us what is on your mind",
        },
      ],
    },
  ],
  completedHtml:
    "<p><h4>Thank you for sharing this information with us.</h4></p><p>Your name is: <b>{name}</b></p><p>Your email is: <b>{email}</b></p><p>This is what is on your mind:</p><p>{comment}</p>",
};
